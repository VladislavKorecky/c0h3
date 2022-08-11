from flask import Blueprint, send_from_directory
from flask_cors import cross_origin


home = Blueprint("home", __name__)


@home.route("/")
def home_page():
    """
    Handle requests to the home page endpoint.
    """

    return send_from_directory("../c0h3-react/build", "index.html")


@home.route("/manifest.json")
def manifest():
    return send_from_directory('../c0h3-react/build', 'manifest.json')


@home.route('/static/js/main.0c4045ca.js')
def favicon():
    return send_from_directory('../c0h3-react/build', 'static/js/main.0c4045ca.js')