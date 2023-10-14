from rest_framework import viewsets, permissions
from apps.rabbits.models import Rabbit
from .serializers import RabbitSerializer


class RabbitViewSet(viewsets.ModelViewSet):
    queryset = Rabbit.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = RabbitSerializer


# ordenamiento asc - desc, paginacion, verbos, con GenericViewSet
