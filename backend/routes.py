from datetime import datetime, timezone

from flask import Flask, jsonify, request

from database import SessionLocal
from services import build_dashboard_payload, list_assets, list_scripts, list_uploads, parse_limit


def register_routes(app: Flask) -> None:
    @app.get("/api/health")
    def health_check():
        return jsonify(
            {
                "status": "ok",
                "message": "DevStash API is running",
                "timestamp": datetime.now(timezone.utc).isoformat(),
            }
        ), 200

    @app.get("/api/dashboard")
    def dashboard_data():
        session = SessionLocal()
        try:
            return jsonify(build_dashboard_payload(session)), 200
        finally:
            session.close()

    @app.get("/api/assets")
    def assets_index():
        session = SessionLocal()
        try:
            limit = parse_limit(request.args.get("limit"))
            payload = list_assets(
                session,
                query=request.args.get("q"),
                asset_type=request.args.get("type"),
                limit=limit,
            )
            return jsonify({"items": payload, "count": len(payload)}), 200
        finally:
            session.close()

    @app.post("/api/assets")
    def assets_create():
        data = request.get_json(force=True, silent=True) or {}
        required = ["title", "description", "asset_type", "category", "owner_handle", "size_bytes", "file_extension", "badge", "tone", "preview_style"]
        missing = [f for f in required if not data.get(f)]
        if missing:
            return jsonify({"error": f"Missing fields: {', '.join(missing)}"}), 400

        try:
            size_bytes = int(data["size_bytes"])
        except Exception:
            return jsonify({"error": "size_bytes must be integer"}), 400

        from models import Asset
        from database import SessionLocal
        from datetime import datetime, timezone

        asset = Asset(
            title=data["title"],
            description=data["description"],
            asset_type=data["asset_type"],
            category=data["category"],
            owner_handle=data["owner_handle"],
            size_bytes=size_bytes,
            file_extension=data["file_extension"],
            badge=data["badge"],
            tone=data["tone"],
            preview_style=data["preview_style"],
            status=data.get("status", "synced"),
            is_private=bool(data.get("is_private", True)),
            created_at=datetime.now(timezone.utc),
            updated_at=datetime.now(timezone.utc),
        )
        session = SessionLocal()
        try:
            session.add(asset)
            session.commit()
            return jsonify({"id": asset.id}), 201
        finally:
            session.close()

    @app.get("/api/scripts")
    def scripts_index():
        session = SessionLocal()
        try:
            limit = parse_limit(request.args.get("limit"))
            payload = list_scripts(session, query=request.args.get("q"), limit=limit)
            return jsonify({"items": payload, "count": len(payload)}), 200
        finally:
            session.close()

    @app.post("/api/scripts")
    def scripts_create():
        data = request.get_json(force=True, silent=True) or {}
        required = ["title", "description", "category", "owner_handle", "size_bytes", "file_extension", "badge", "tone", "preview_style"]
        missing = [f for f in required if not data.get(f)]
        if missing:
            return jsonify({"error": f"Missing fields: {', '.join(missing)}"}), 400

        try:
            size_bytes = int(data["size_bytes"])
        except Exception:
            return jsonify({"error": "size_bytes must be integer"}), 400

        from models import Asset
        from database import SessionLocal
        from datetime import datetime, timezone

        asset = Asset(
            title=data["title"],
            description=data["description"],
            asset_type="script",
            category=data["category"],
            owner_handle=data["owner_handle"],
            size_bytes=size_bytes,
            file_extension=data["file_extension"],
            badge=data["badge"],
            tone=data["tone"],
            preview_style=data["preview_style"],
            status=data.get("status", "synced"),
            is_private=bool(data.get("is_private", True)),
            created_at=datetime.now(timezone.utc),
            updated_at=datetime.now(timezone.utc),
        )
        session = SessionLocal()
        try:
            session.add(asset)
            session.commit()
            return jsonify({"id": asset.id}), 201
        finally:
            session.close()

    @app.get("/api/uploads")
    def uploads_index():
        session = SessionLocal()
        try:
            limit = parse_limit(request.args.get("limit"), default=10)
            payload = list_uploads(session, limit=limit)
            return jsonify({"items": payload, "count": len(payload)}), 200
        finally:
            session.close()
