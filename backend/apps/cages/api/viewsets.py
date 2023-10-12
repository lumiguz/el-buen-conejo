from utils.filters import CageFilterSet
from utils.pagination import ExtendedPagination
from apps.cages.api.serializers import (
    CageListSerializer,
    CageSerializer,
    CageUpdateSerializer,
)
from django.shortcuts import get_object_or_404
from django_filters import rest_framework

from rest_framework import filters, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


class CageViewSet(viewsets.GenericViewSet):
    serializer_class = CageSerializer
    list_serializer_class = CageListSerializer
    filter_backends = [
        rest_framework.DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    filterset_class = CageFilterSet
    search_fields = ("id")
    ordering_fields = ("id")
    pagination_class = ExtendedPagination

    def get_queryset(self):
        if self.queryset is None:
            self.queryset = self.serializer_class.Meta.model.objects.filter(
                is_active=True
            ).values("id")
            return self.queryset

    def get_object(self, pk):
        return get_object_or_404(self.serializer_class.Meta.model, pk=pk)

    @action(methods=["patch"], detail=True)
    def set_public(self, request, pk=None):
        """
        Change public status
        """
        cage = self.get_object(pk)
        cage.is_public = request.data.get("is_public", cage.is_public)
        try:
            cage.save()
            return Response(
                {"message": "El estado se actualizó correctamente!"},
                status=status.HTTP_200_OK,
            )
        except Exception as e:
            return Response(
                {"error": "No se pudo actualizar el estado", "detail": str(e)},
                status=status.HTTP_400_BAD_REQUEST,
            )
    

    def list(self, request, *args, **kwargs):
        """
        Get a collection of cages
        """
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.list_serializer_class(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.list_serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        """
        Create a cage
        """
        cage_serializer = self.serializer_class(data=request.data)
        if cage_serializer.is_valid():
            cage_serializer.save()
            return Response(
                {"message": "La jaula se creó correctamente!"},
                status=status.HTTP_201_CREATED,
            )
        return Response(
            {
                "message": "Hay errores en el registro de la Jaula!",
                "errors": cage_serializer.errors,
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    def retrieve(self, request, pk=None):
        """
        Get a cage
        """
        cage = self.get_object(pk)
        cage_serializer = self.serializer_class(cage)
        return Response(cage_serializer.data)

    def update(self, request, pk=None):
        """
        Update a cage
        """
        cage = self.get_object(pk)
        cage_serializer = CageUpdateSerializer(cage, data=request.data)
        if cage_serializer.is_valid():
            cage_serializer.save()
            return Response(
                {"message": "Jaula actualizada correctamente!"},
                status=status.HTTP_200_OK,
            )
        return Response(
            {
                "message": "Error al actualizar la Jaula",
                "error": cage_serializer.errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    def destroy(self, request, pk=None):
        """Delete a Cage in logical mode"""

        cage_destroy = self.serializer_class.Meta.model.objects.filter(id=pk).update(
            is_active=False
        )
        if cage_destroy == 1:
            return Response(
                {"message": "Jaula eliminada correctamente!"},
                status=status.HTTP_200_OK,
            )
        return Response(
            {"message": "La jaula no existe!"}, status=status.HTTP_404_NOT_FOUND
        )
