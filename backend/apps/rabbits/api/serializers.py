from rest_framework import serializers
from apps.rabbits.models import Rabbit


class RabbitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rabbit
        fields = (
            "id",
            "photo",
            "tag",
            "breed",
            "genre",
            "weight",
            "price",
            "cage_id",
            "created",
            "updated",
        )
        # Cant update or eliminate
        read_only_fields = ("created", "id")
