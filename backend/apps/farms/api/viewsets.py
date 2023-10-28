from rest_framework import status
from rest_framework.permissions import DjangoObjectPermissions
from rest_framework.response import Response
from apps.farms.api.serializer import farmSerializer, FarmPhotoSerializer
from apps.farms.models import Farm
from rest_framework.viewsets import GenericViewSet
from rest_framework import viewsets, permissions
from rest_framework import generics, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from boto3.session import Session
import os
from apps.farms.models import Farm
from rabbits_farm import settings

"""
    The FarmViewset class is a generic viewset that allows any user to access and manipulate Farm
    objects. It is used to create, retrieve, update, and delete Farm objects using the farmSerializer.
"""

PATH_PHOTOS = "/fotos/granjas/"


class FarmViewset(GenericViewSet):
    queryset = Farm.objects.all()
    serializer_class = farmSerializer

    """este es el docstring de esta funcion """

    def create(self, request, *args, **kwargs):
        """
        The above function creates a new object using the provided request data and saves it using the
        serializer.

        :param request: The `request` parameter is an object that represents the HTTP request made by the client. It contains information such as the request method (GET, POST, etc.), headers, query
        parameters, and the request body
        return: The function returns a Response object that contains the serialized data of the created object (json).
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def list(self, request):
        """

        :param request: The `request` parameter is an object that represents the HTTP request made by
        the client. It contains information such as the request method (GET, POST, etc.), headers, query
        parameters, and the request body. It is used to retrieve data from the client and perform
        actions based on the request
        :return: The function returns a response containing serialized data from the queryset.
        """
        serializer = self.get_serializer(self.get_queryset(), many=True)
        # return self.get_paginated_response(self.paginate_queryset(serializer.data))
        return Response(serializer.data)

    def retrieve(self, request, pk):
        """
        :param request: The `request` parameter is an object that represents the HTTP request made by
        the client. It contains information such as the request method (GET, POST, etc.), headers, query
        parameters, and the request body
        :param pk: The "pk" parameter stands for "primary key". It is used to identify a specific object
        in a database. In this context, it is used to retrieve a specific item from the database based
        on its primary key value
        :return:The function retrieves an item and returns its serialized data as a response.
        """
        item = self.get_object()
        serializer = self.get_serializer(item)
        return Response(serializer.data)

    def update(self, request, pk=None):
        """
        The above function updates an item with the given primary key using the data from the request
        and returns the updated item.

        :param request: The `request` parameter is an object that represents the HTTP request made by
        the client. It contains information such as the request method (GET, POST, etc.), headers, query
        parameters, and the request body
        :param pk: The "pk" parameter stands for "primary key" and is used to identify a specific object
        in the database. In this case, it is used to retrieve the object that needs to be updated
        :return: a Response object with the serialized data and a status code of 200 (OK).
        """
        item = self.get_object(pk)
        serializer = self.get_serializer(item, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=True, methods=["post"], parser_classes=[MultiPartParser])
    def upload_photo(self, request, pk=None, *args, **kwargs):
        serializer = FarmPhotoSerializer(data=request.FILES)
        serializer.is_valid(raise_exception=True)

        # Obtiene el archivo cargado desde la solicitud y asigna la URL de S3 al campo 'photo'
        uploaded_file = request.FILES["photo"]
        file_extension = os.path.splitext(uploaded_file)[-1]
        filename = f"{PATH_PHOTOS}/{uploaded_file}"

        session = Session(
            region_name=settings.AWS_S3_REGION_NAME,
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        )
        s3 = session.resource("s3")
        s3.Bucket(settings.AWS_STORAGE_BUCKET_NAME).put_object(
            Key=filename, Body=uploaded_file
        )

        # Guardar la URL de S3 en el campo 'photo' del perfil
        serializer.validated_data[
            "photo"
        ] = f"https://{settings.AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com/{filename}"

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )
