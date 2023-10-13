from rest_framework.viewsets import ModelViewSet 
from .serializer import farmSerializer
from apps.farms.models import Farm

class FarmViewset(ModelViewSet):
	queryset = Farm.objects.all()
	serializer_class = farmSerializer 