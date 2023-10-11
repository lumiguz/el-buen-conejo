from rest_framework import viewsets
from .models import Cage
from .serializers import CageSerializer

class CageViewSet(viewsets.ModelViewSet):
    queryset = Cage.objects.all()
    serializer_class = CageSerializer
