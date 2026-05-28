from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, scoped_session, sessionmaker

from config import Config


class Base(DeclarativeBase):
    pass


connect_args = {"check_same_thread": False} if Config.DATABASE_URL.startswith("sqlite") else {}
engine = create_engine(Config.DATABASE_URL, connect_args=connect_args, future=True)
SessionLocal = scoped_session(sessionmaker(bind=engine, autoflush=False, autocommit=False, expire_on_commit=False))


def init_database() -> None:
    import models  # noqa: F401

    Base.metadata.create_all(bind=engine)
