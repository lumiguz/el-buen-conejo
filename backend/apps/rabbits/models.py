from django.db import models
from apps.cages.models import Cage
from apps.abstracts.models import AbstractModel


# Create your models here.
class Rabbit(AbstractModel):
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

    BREED_CHOICE = (
        ("Nueva Zelanda", "Nueva Zelanda"),
        ("Chinchilla", "Chinchilla"),
        ("Rex", "Rex"),
        ("Mariposa", "Mariposa"),
        ("Azteca", "Azteca"),
        ("Gigante de Flandes", "Gigante de Flandes"),
        ("California", "California"),
        ("Cabeza de León", "Cabeza de León"),
        ("Otro", "Otro"),
    )
    GENDER_CHOICE = (
        ("Macho", "Macho"),
        ("Hembra", "Hembra"),
    )

    cage_id = models.ForeignKey(Cage, on_delete=models.CASCADE)
    breed = models.CharField(max_length=20, choices=BREED_CHOICE, blank=False)
    genre = models.CharField(max_length=6, choices=GENDER_CHOICE, blank=False)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    tag = models.CharField(max_length=15, unique=True, blank=False)
    weight = models.DecimalField(max_digits=2, decimal_places=1, default=1)
    photo = models.CharField(max_length=255, blank=True)
