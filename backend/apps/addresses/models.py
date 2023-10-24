from django.db import models
from apps.abstracts.models import AbstractModel
from apps.catalogs.models import State, City


# Create your models here.
class Address(AbstractModel):
    address = models.CharField(max_length=255)
    state = models.ForeignKey(State, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)

    def __str__(self):
        return self.address

    class Meta:
        db_table = "addresses"
