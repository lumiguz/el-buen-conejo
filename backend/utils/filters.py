from apps.users.models import User
#from apps.cages.models import Cage
from django_filters import rest_framework


class UserFilterSet(rest_framework.FilterSet):
    class Meta:
        model = User
        fields = (
            "username",
            "email",
        )
        
# class CageFilterSet(rest_framework.FilterSet):
#     class Meta:
#         model = Cage
#         fields = {
#             'id': ['exact'],
#         }
