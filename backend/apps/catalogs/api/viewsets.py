from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from apps.catalogs.models import State, City
from .serializers import StateSerializer, CitySerializer
from apps.abstracts.viewsets import AbstractViewSet
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from django.core import serializers
from rest_framework.decorators import action
import json


@action(methods=["get"], detail=True)
class StateViewSet(AbstractViewSet):
    http_methods_names = "GET"
    permission_classes = (AllowAny,)
    serializer_class = StateSerializer

    def list(self, request):
        queryset = State.objects.all()
        serializer = StateSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        state_instance = State.object_state.get_object_by_state_name(pk)

        if state_instance:
            serializer = StateSerializer(state_instance)
            return Response(serializer.data)
        else:
            custome_message = "Sorry"
            return Response({"message": custome_message}, status=404)


class CityViewSet(AbstractViewSet):
    http_methods_names = "GET"
    permission_classes = (AllowAny,)
    serializer_class = CitySerializer

    def list(self, request):
        queryset = City.objects.all()
        serializer = CitySerializer(queryset, many=True)

        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        state_instance = City.object_city.get_object_by_city_name(pk)

        if state_instance:
            serializer = CitySerializer(state_instance)
            return Response(serializer.data)
        return Response(
            {"message": "State not found"},
            status=status.HTTP_404_NOT_FOUND,
        )
