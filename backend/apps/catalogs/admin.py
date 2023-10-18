from django.contrib import admin
from apps.catalogs.models import State, City, Breed

# Register your models here.
admin.site.register(State)
admin.site.register(City)
admin.site.register(Breed)
