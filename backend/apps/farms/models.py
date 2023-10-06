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
    name = models.CharField(max_length=150, null=False)
    address = models.CharField(max_length=150, null=False)
    is_active = models.BooleanField(default=True)


class Cage(models.Model):
    """
     The Cage is used to keep the rabbits.
     One cage has one or many rabbits.

    Args:
        farm_id ( int ): related with farm model
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


class Rabbit(models.Model):
    """


    Args:
        models (_type_): _description_
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cage_id = models.ForeignKey(Cage, on_delete=models.CASCADE)
    breed = models.CharField(max_length=20, null=False)
    genre = models.CharField(max_length=6)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    tag = models.CharField(max_length=15, unique=True, null=False)
    weight = models.DecimalField(max_digits=2, decimal_places=1)
    is_active = models.BooleanField(default=True)
