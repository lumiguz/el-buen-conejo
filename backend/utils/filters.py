from apps.users.models import User
from django_filters import rest_framework


class UserFilterSet(rest_framework.FilterSet):
    class Meta:
        model = User
        fields = (
            "username",
            "email",
        )
