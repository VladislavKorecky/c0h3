from os import environ


PRODUCTION_CONFIG = {
    "ENV": "production",
    "DEBUG": False,
    "TESTING": False,

    "SECRET_KEY": environ["SECRET_KEY"],

    "SQLALCHEMY_DATABASE_URI": environ.get("DATABASE_URL").replace("postgres://", "postgresql://", 1),
    "SQLALCHEMY_TRACK_MODIFICATIONS": False
}
