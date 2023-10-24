from apps.abstracts.serializers import AbstractSerializer
from rest_framework.exceptions import ValidationError
from rest_framework import serializers
from apps.catalogs.models import State, City


class StateSerializer(AbstractSerializer):
    state = serializers.CharField(read_only=True)

    def validate_state(self, value):
        if self.context["request"].pk != value:
            raise ValidationError("State requiered doesn't match")
        return value

    class Meta:
        model = State
        fields = ["id", "state", "created", "updated", "is_active"]
        read_only_fields = ["created", "updated", "is_active"]


class CitySerializer(AbstractSerializer):
    city = serializers.CharField(read_only=True)
    state = serializers.CharField(read_only=True)

    class Meta:
        model = City
        fields = ["id", "city", "created", "updated", "is_active", "state"]
        read_only_fields = ["created", "updated", "is_active"]
