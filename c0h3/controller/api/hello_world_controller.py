from flask import Blueprint


hello_world = Blueprint("hello_world", __name__)


@hello_world.route("/")
def hello_world_api():
    """
    Handle requests to the hello world endpoint.
    """

    return {"message": "Hello World!"}
