from c0h3 import create_app
from c0h3.configs.production_config import PRODUCTION_CONFIG

# create an app
app = create_app(config_dict=PRODUCTION_CONFIG)

# run the app
app.run()
