from apps.users.models import User
from django_filters import rest_framework
from apps.rabbits.models import Rabbit


class UserFilterSet(rest_framework.FilterSet):
    class Meta:
        model = User
        fields = (
            "username",
            "email",
        )


class RabbitFilterSet(rest_framework.FilterSet):
    class Meta:
        model = Rabbit
        fields = (
            "created",
            "breed",
            "genre",
            "birthday",
            "price",
            "tag",
            "weight",
            "cage_id",
            "is_active",
        )
        ordering = ("created",)
