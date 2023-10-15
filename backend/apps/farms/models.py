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
    
        # Modifica como se visualiza el nombre de la clase en el admin
    # Como ordenar los datos en el admin
    class Meta:
        db_table = 'farm'
        verbose_name = 'farm'
        verbose_name_plural = 'farm'
        ordering = ['name']

    def __str__(self):
        return f'{self.id} {self.name} {self.address} {self.is_active}'

