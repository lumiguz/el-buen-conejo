from django.db import models
from django.contrib.auth.models import AbstractBaseUser
import uuid


class User(AbstractBaseUser):
    """
      It is a new model for custom user
    Args:
        user_name ( str ): user name.
        address ( str ): farm address
        is_active ( bool ): logic delete
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_name = models.CharField(max_length=10, null=False, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=8, null=False)
    is_active = models.BooleanField(default=True)
