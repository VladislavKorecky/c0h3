TESTING_CONFIG = {
    "ENV": "development",
    "DEBUG": False,
    "TESTING": True,

    # this secret key should be used ONLY FOR DEVELOPMENT/TESTING!! (security threat)
    "SECRET_KEY": "ed47b8b93235c1d8a680f50386951dc059b4bfd89a5b9374",

    "SQLALCHEMY_DATABASE_URI": "sqlite:///c0h3_testing.db",
    "SQLALCHEMY_TRACK_MODIFICATIONS": False
}
