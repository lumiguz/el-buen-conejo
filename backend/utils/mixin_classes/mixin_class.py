from django.db import connection
import os


class ResetAutoIncrementMixin:
    def reset_auto_increment(self, variable):
        sql_result = os.environ.get(variable)
        with connection.cursor() as cursor:
            cursor.execute(sql_result.replace(",", " "))
