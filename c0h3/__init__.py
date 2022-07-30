from flask import Flask


def create_app(config_dict: dict = None):
    """
    Create and return flask app.

    Args:
        config_dict (dict, optional): A configuration dictionary that is passed to config.from_mapping.
            Default value is None a.k.a. flask will use the default settings.

    Returns:
        Flask: The app object.
    """

    app = Flask(__name__)

    # config setup
    if config_dict is not None:
        app.config.from_mapping(config_dict)

    return app
