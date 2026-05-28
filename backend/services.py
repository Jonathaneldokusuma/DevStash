from collections import Counter
from datetime import datetime, timedelta, timezone

from sqlalchemy import or_, select
from sqlalchemy.orm import Session

from config import Config
from models import Asset

SCRIPT_TYPES = {"script", "document", "config"}
IMAGE_TYPES = {"image", "bundle"}
AUDIO_TYPES = {"audio"}
MONTH_LABELS = ["Januari", "Maret", "Juni", "September", "Desember"]


def format_bytes(size_bytes: int) -> str:
    if size_bytes >= 1024 * 1024 * 1024:
        return f"{size_bytes / (1024 * 1024 * 1024):.1f} GB"
    if size_bytes >= 1024 * 1024:
        return f"{size_bytes / (1024 * 1024):.1f} MB"
    if size_bytes >= 1024:
        return f"{size_bytes / 1024:.1f} KB"
    return f"{size_bytes} B"


def normalize_datetime(value: datetime) -> datetime:
    if value.tzinfo is None:
        return value.replace(tzinfo=timezone.utc)
    return value.astimezone(timezone.utc)


def relative_time(value: datetime) -> str:
    value = normalize_datetime(value)
    now = datetime.now(timezone.utc)
    delta = now - value
    seconds = int(delta.total_seconds())
    hours = seconds // 3600
    days = seconds // 86400

    if seconds < 3600:
        minutes = max(1, seconds // 60)
        return f"{minutes} menit yang lalu"
    if hours < 24:
        return f"{hours} jam yang lalu"
    if days == 1:
        return "Kemarin"
    return f"{days} hari yang lalu"


def serialize_asset(asset: Asset) -> dict:
    created_at = normalize_datetime(asset.created_at)
    updated_at = normalize_datetime(asset.updated_at)
    return {
        "id": asset.id,
        "title": asset.title,
        "description": asset.description,
        "assetType": asset.asset_type,
        "category": asset.category,
        "ownerHandle": asset.owner_handle,
        "sizeBytes": asset.size_bytes,
        "sizeLabel": format_bytes(asset.size_bytes),
        "fileExtension": asset.file_extension,
        "badge": asset.badge,
        "tone": asset.tone,
        "art": asset.preview_style,
        "status": asset.status,
        "isPrivate": asset.is_private,
        "createdAt": created_at.isoformat(),
        "updatedAt": updated_at.isoformat(),
        "relativeCreatedAt": relative_time(created_at),
    }


def recent_asset_card(asset: Asset) -> dict:
    created_at = normalize_datetime(asset.created_at)
    return {
        "title": asset.title,
        "description": asset.description,
        "meta": relative_time(created_at),
        "badge": asset.badge,
        "tone": asset.tone,
        "art": asset.preview_style,
    }


def parse_limit(raw_limit: str | None, default: int = 12, maximum: int = 50) -> int:
    try:
        limit = int(raw_limit or default)
    except ValueError:
        return default
    return max(1, min(limit, maximum))


def list_assets(session: Session, query: str | None = None, asset_type: str | None = None, limit: int = 12) -> list[dict]:
    statement = select(Asset)

    if asset_type:
        statement = statement.where(Asset.asset_type == asset_type)

    if query:
        sanitized = query.strip()[:100]
        if sanitized:
            pattern = f"%{sanitized}%"
            statement = statement.where(
                or_(
                    Asset.title.ilike(pattern),
                    Asset.description.ilike(pattern),
                    Asset.category.ilike(pattern),
                )
            )

    statement = statement.order_by(Asset.created_at.desc()).limit(limit)
    assets = session.scalars(statement).all()
    return [serialize_asset(asset) for asset in assets]


def list_scripts(session: Session, query: str | None = None, limit: int = 12) -> list[dict]:
    statement = select(Asset).where(Asset.asset_type.in_(SCRIPT_TYPES))

    if query:
        sanitized = query.strip()[:100]
        if sanitized:
            pattern = f"%{sanitized}%"
            statement = statement.where(
                or_(
                    Asset.title.ilike(pattern),
                    Asset.description.ilike(pattern),
                    Asset.category.ilike(pattern),
                )
            )

    assets = session.scalars(statement.order_by(Asset.created_at.desc()).limit(limit)).all()
    return [serialize_asset(asset) for asset in assets]


def list_uploads(session: Session, limit: int = 10) -> list[dict]:
    assets = session.scalars(select(Asset).order_by(Asset.created_at.desc()).limit(limit)).all()
    return [
        {
            "id": asset.id,
            "title": asset.title,
            "status": asset.status,
            "sizeLabel": format_bytes(asset.size_bytes),
            "uploadedAt": normalize_datetime(asset.created_at).isoformat(),
            "relativeUploadedAt": relative_time(asset.created_at),
            "ownerHandle": asset.owner_handle,
            "isPrivate": asset.is_private,
        }
        for asset in assets
    ]


def _sum_by_group(assets: list[Asset], allowed_types: set[str]) -> int:
    return sum(asset.size_bytes for asset in assets if asset.asset_type in allowed_types)


def build_heatmap(assets: list[Asset]) -> list[list[int]]:
    today = datetime.now(timezone.utc).date()
    days = [today - timedelta(days=offset) for offset in range(239, -1, -1)]
    counts = Counter(normalize_datetime(asset.created_at).date() for asset in assets)
    intensities = [min(counts.get(day, 0), 2) for day in days]
    return [intensities[index:index + 48] for index in range(0, 240, 48)]


def build_dashboard_payload(session: Session) -> dict:
    assets = session.scalars(select(Asset).order_by(Asset.created_at.desc())).all()
    total_used = sum(asset.size_bytes for asset in assets)
    total_storage = Config.TOTAL_STORAGE_BYTES
    usage_percent = int(round((total_used / total_storage) * 100)) if total_storage else 0
    if total_used > 0:
        usage_percent = max(1, usage_percent)

    script_total = _sum_by_group(assets, SCRIPT_TYPES)
    image_total = _sum_by_group(assets, IMAGE_TYPES)
    audio_total = _sum_by_group(assets, AUDIO_TYPES)

    recent_assets = assets[:4]
    contributors_active = len({asset.owner_handle for asset in assets})

    return {
        "summary": {
            "usedStorage": format_bytes(total_used),
            "totalStorage": format_bytes(total_storage),
            "usagePercent": usage_percent,
            "contributorsActive": contributors_active,
            "lastSync": relative_time(normalize_datetime(assets[0].updated_at)) if assets else "Belum ada data",
        },
        "storageBreakdown": [
            {
                "label": "Skrip & Dokumentasi",
                "value": format_bytes(script_total),
                "percent": int(round((script_total / total_used) * 100)) if total_used else 0,
                "tone": "primary",
            },
            {
                "label": "Aset Gambar & UI",
                "value": format_bytes(image_total),
                "percent": int(round((image_total / total_used) * 100)) if total_used else 0,
                "tone": "secondary",
            },
            {
                "label": "Library Audio",
                "value": format_bytes(audio_total),
                "percent": int(round((audio_total / total_used) * 100)) if total_used else 0,
                "tone": "tertiary",
            },
        ],
        "recentAssets": [recent_asset_card(asset) for asset in recent_assets],
        "heatmap": build_heatmap(assets),
        "monthLabels": MONTH_LABELS,
        "generatedAt": datetime.now(timezone.utc).isoformat(),
    }
