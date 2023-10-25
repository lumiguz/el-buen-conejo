from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from django.db import connection
from apps.catalogs.api.serializers import StateSerializer
import os
from utils.pagination import ExtendedPagination


class ResetAutoIncrementMixin:
    def reset_auto_increment(self, variable):
        sql_result = os.environ.get(variable)
        with connection.cursor() as cursor:
            cursor.execute(sql_result.replace(",", " "))


class CommonViewSetMixin:
    http_methods_names = "GET"
    permission_classes = (AllowAny,)
    pagination_class = ExtendedPagination
