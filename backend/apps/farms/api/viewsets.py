from rest_framework import status
from rest_framework.permissions import DjangoObjectPermissions
from rest_framework.response import Response 
from apps.farms.api.serializer import farmSerializer
from apps.farms.models import Farm
from rest_framework.viewsets import GenericViewSet
from rest_framework import viewsets, permissions


class FarmViewset(GenericViewSet):
    queryset = Farm.objects.all()
    serializer_class = farmSerializer
    permission_classes = [permissions.AllowAny]
    
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def list(self, request):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))
    
    def retrieve(self, request, pk):
        item = self.get_object()
        serializer = self.get_serializer(item)
        return Response(serializer.data)

    def destroy(self, request):
        item = self.get_object()
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
