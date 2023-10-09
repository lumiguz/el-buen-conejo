from django.db import models
import uuid
from apps.farms.models import Farm


# Create your models here.
class Cage(models.Model):
    """
     The Cage is used to keep the rabbits.
     One cage has one or many rabbits.

    Args:
        farm_id ( str ): related with farm model
        count_rabbits ( int ): the total rabbits kepped into cage.
        price ( decimal ): public price
        is_public ( boolean ): the farm decide if customers can see the cage.
        is_active ( boolean ): logic delete.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    farm_id = models.ForeignKey(Farm, on_delete=models.CASCADE)
    count_rabbits = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    is_public = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
