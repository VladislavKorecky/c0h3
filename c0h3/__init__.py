from flask import Flask
from flask_cors import CORS

from c0h3.controller.home_page_controller import home


def create_app(config_dict: dict = None) -> Flask:
    """
    Create and return flask app.

    Args:
        config_dict (dict, optional): A configuration dictionary that is passed to config.from_mapping.
            Default value is None a.k.a. flask will use the default settings.

    Returns:
        Flask: The app object.
    """

    app = Flask(__name__)
    #if app.config["ENV"] == "production":
    app.static_folder = "c0h3-react/build"
    app.static_url_path = ""

    CORS(app)

    # config setup
    if config_dict is not None:
        app.config.from_mapping(config_dict)

    # register blueprints
    app.register_blueprint(home)

    return app
