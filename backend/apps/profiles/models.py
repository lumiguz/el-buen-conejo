from django.db import models
import uuid
from apps.users.models import User
from apps.farms.models import Farm
from apps.cages.models import Cage
from apps.rabbits.models import Rabbit
from apps.abstracts.models import AbstractManager, AbstractModel


# Create your models here.
class Profile(AbstractModel):
    """
     The Profile is used to keep the rabbits.
     One cage has one or many rabbits.

    Args:
        farm_id ( str ): related with farm model
        count_rabbits ( int ): the total rabbits kepped into cage.
        price ( decimal ): public price
        is_public ( boolean ): the farm decide if customers can see the cage.
        is_active ( boolean ): logic delete.
    """

    user_id = models.OneToOneField(User, on_delete=models.CASCADE)
    is_producer = models.BooleanField(default=False)
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    state = models.CharField(max_length=15, null=True, blank=True)
    photo = models.CharField(max_length=255, blank=True)
    address = models.CharField(max_length=150, null=True, blank=True)
    qualification = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    farm_id = models.ManyToManyField(Farm)
    cage_id = models.ManyToManyField(Cage)
    rabbit_id = models.ManyToManyField(Rabbit)
