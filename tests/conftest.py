from pytest import fixture

from c0h3 import create_app
from c0h3.configs.testing_config import TESTING_CONFIG

from flask.testing import FlaskClient


@fixture
def flask_client() -> FlaskClient:
    """
    Yield a flask testing client.

    Yields:
        FlaskClient: The testing client.
    """

    app = create_app(TESTING_CONFIG)

    with app.test_client() as client:
        with app.app_context():
            yield client
