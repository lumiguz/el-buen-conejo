from rest_framework import serializers
from apps.rabbits.models import Rabbit


class RabbitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rabbit
        fields = "__all__"
        # Cant update or eliminate
        read_only_fields = ("created", "id")
