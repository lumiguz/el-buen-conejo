from rest_framework import viewsets, permissions 
from .serializer import farmSerializer
from apps.farms.models import Farm

class FarmViewset(viewsets.ModelViewSet):
    queryset = Farm.objects.all()
    serializer_class = farmSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly] 