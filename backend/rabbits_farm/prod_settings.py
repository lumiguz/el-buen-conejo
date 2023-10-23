from .common_settings import *

# This code is for production
# If exists environemnt variable AWS_EXTERNAL_HOSTNAME then append element in ALLOWED_HOSTS list and DEBUG is False

ALLOWED_HOSTS = []
AWS_EXTERNAL_HOSTNAME = os.environ.get("AWS_EXTERNAL_HOSTNAME")
if "RDS_HOSTNAME" in os.environ:
    ALLOWED_HOSTS.append(AWS_EXTERNAL_HOSTNAME)

DEBUG = False

# Configuration of django-cors-headers
# CORS_ALLOW_ALL_ORIGINS = True
# CORS_ALLOW_CREDENTIALS = True

MIDDLEWARE.append("corsheaders.middleware.CorsMiddleware")
