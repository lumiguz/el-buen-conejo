from .common_settings import *

# This code is for production
# If exists environemnt variable AWS_EXTERNAL_HOSTNAME then append element in ALLOWED_HOSTS list and DEBUG is False

ALLOWED_HOSTS = ["107.21.219.35"]

DEBUG = False

# Configuration of django-cors-headers
# CORS_ALLOW_ALL_ORIGINS = True
# CORS_ALLOW_CREDENTIALS = True

MIDDLEWARE.append("corsheaders.middleware.CorsMiddleware")
