from flask.testing import FlaskClient


def test_client(flask_client: FlaskClient) -> None:
    """
    GIVEN a flask client
    THEN test if the client is not None and is an instance of FlaskClient.
    """

    assert flask_client is not None
    assert isinstance(flask_client, FlaskClient)
