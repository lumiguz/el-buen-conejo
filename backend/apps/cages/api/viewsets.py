#from utils.filters import CageFilterSet
from utils.pagination import ExtendedPagination
from apps.cages.api.serializers import (
    #CageListSerializer,
    CageSerializer,
    #CageUpdateSerializer,
)
from django.shortcuts import get_object_or_404
from django_filters import rest_framework

from rest_framework import filters, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from apps.cages.models import Cage

class CageViewSet(viewsets.ModelViewSet):
    queryset = Cage.objects.all()
    serializer_class = CageSerializer


