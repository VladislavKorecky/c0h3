from c0h3 import create_app
from c0h3.configs.development_config import DEVELOPMENT_CONFIG

# IMPORTANT: This file should only be run on a local environment! (uses development config)

# create an app
app = create_app(config_dict=DEVELOPMENT_CONFIG)

# run the app
app.run()
