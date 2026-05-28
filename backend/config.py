import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DEFAULT_DB_PATH = BASE_DIR / "devstash.db"


class Config:
    DEBUG = os.getenv("DEVSTASH_DEBUG", "true").lower() == "true"
    DATABASE_URL = os.getenv("DEVSTASH_DATABASE_URL", f"sqlite:///{DEFAULT_DB_PATH.as_posix()}")
    ALLOWED_ORIGINS = [
        origin.strip()
        for origin in os.getenv(
            "DEVSTASH_ALLOWED_ORIGINS",
            "http://localhost:3000,http://127.0.0.1:3000",
        ).split(",")
        if origin.strip()
    ]
    TOTAL_STORAGE_BYTES = int(os.getenv("DEVSTASH_TOTAL_STORAGE_BYTES", str(10 * 1024 * 1024 * 1024)))
