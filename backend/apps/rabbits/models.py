from django.db import models
from apps.cages.models import Cage
import uuid


# Create your models here.
class Rabbit(models.Model):
    """
    The animal of the farm for trade.

    Args:
        cage_id (str): related with cage model
        breed (str): breed of the rabbit
        genre (str): genre of the rabbit
        price (decimal): public price for trade
        tag (str): identifier od the rabbit
        weight (decimal): weight of the rabbit
        is_active (boolean): logic delete

    """

    GENDER_CHOICE = (
        ("M", "Male"),
        ("F", "Female"),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cage_id = models.ForeignKey(to="Cage", on_delete=models.CASCADE)
    breed = models.CharField(max_length=20, null=False)
    genre = models.CharField(max_length=1, choices=GENDER_CHOICE, null=False)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    tag = models.CharField(max_length=15, unique=True, null=False)
    weight = models.DecimalField(max_digits=2, decimal_places=1)
    is_active = models.BooleanField(default=True)
