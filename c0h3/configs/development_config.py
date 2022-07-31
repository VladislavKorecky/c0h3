DEVELOPMENT_CONFIG = {
    "ENV": "development",
    "DEBUG": True,
    "TESTING": False,

    # this secret key should be used ONLY FOR DEVELOPMENT/TESTING!! (security threat)
    "SECRET_KEY": "ed47b8b93235c1d8a680f50386951dc059b4bfd89a5b9374",

    "SQLALCHEMY_DATABASE_URI": "sqlite:///c0h3.db",
    "SQLALCHEMY_TRACK_MODIFICATIONS": False
}
