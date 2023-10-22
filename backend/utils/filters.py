from apps.users.models import User
from django_filters import rest_framework
from apps.rabbits.models import Rabbit
from apps.cages.models import Cage


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
            "breed",
            "genre",
            "price",
            "tag",
            "weight",
            "cage_id",
        )


class CageFilterSet(rest_framework.FilterSet):
    class Meta:
        model = Cage
        fields = (
            "count_rabbits",
            "price",
            "farm_id",
            "is_public",
            "is_active",
            "total_weight",
        )
