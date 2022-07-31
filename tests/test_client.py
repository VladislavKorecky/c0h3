from flask.testing import FlaskClient


def test_client(flask_client: FlaskClient) -> None:
    """
    Test if flask client was created successfully.

    Args:
        flask_client (FlaskClient): Flask client passed by the flask_client fixture.
    """

    assert flask_client is not None
    assert isinstance(flask_client, FlaskClient)
