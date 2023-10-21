from common_settings import *

# This code is for production
# If exists environemnt variable AWS_EXTERNAL_HOSTNAME then append element in ALLOWED_HOSTS list and DEBUG is False

ALLOWED_HOSTS = []
AWS_EXTERNAL_HOSTNAME = os.environ.get("AWS_EXTERNAL_HOSTNAME")
if "RDS_HOSTNAME" in os.environ:
    ALLOWED_HOSTS.append(AWS_EXTERNAL_HOSTNAME)

DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("SECRET_KEY")

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": os.environ.get("RDS_DB_NAME"),
        "USER": os.environ.get("RDS_USERNAME"),
        "PASSWORD": os.environ.get("RDS_PASSWORD"),
        "HOST": os.environ.get("RDS_HOSTNAME"),
        "PORT": os.environ.get("RDS_PORT"),
    }
}

# Configuration of django-cors-headers
# CORS_ALLOW_ALL_ORIGINS = True
# CORS_ALLOW_CREDENTIALS = True

MIDDLEWARE.append("corsheaders.middleware.CorsMiddleware")
