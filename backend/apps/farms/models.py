from django.db import models
import uuid

# Create your models here.


class Farm(models.Model):
    """
      It is a place where the farmer care their animals and
      manage them for trade.
    Args:
        name ( str ): farm name.
        address ( str ): farm address
        is_active ( bool ): logic delete
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=150, blank=False)
    address = models.CharField(max_length=150, blank=False)
    is_active = models.BooleanField(default=True)
