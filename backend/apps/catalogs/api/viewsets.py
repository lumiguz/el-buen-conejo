from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from apps.catalogs.models import State
from .serializers import StateSerializer
from apps.abstracts.viewsets import AbstractViewSet
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status


class StateViewSet(AbstractViewSet):
    http_methods_names = "GET"
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = StateSerializer

    def get_queryset(self):
        return State.objects.all()

    def retrieve(self, request, pk):
        state_instance = State.object_state.get_object_by_state_name(pk)
        if state_instance:
            serializer = StateSerializer(state_instance)
            return Response(serializer.data)
        else:
            message = "State with a given name does not exist."
            print("MENSAJE: %s" % message)
            return Response({"detail": message}, status=status.HTTP_404_NOT_FOUND)
