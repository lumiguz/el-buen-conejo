from django.db import models
from apps.farms.models import Farm
from apps.abstracts.models import AbstractModel


# Create your models here.
class Cage(AbstractModel):
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

    farm_id = models.ForeignKey(Farm, on_delete=models.CASCADE)
    count_rabbits = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=20, decimal_places=2, default=0)
    is_public = models.BooleanField(default=False)
    photo = models.CharField(max_length=255, blank=True)
    total_weight = models.DecimalField(max_digits=20, decimal_places=2, default=0)
