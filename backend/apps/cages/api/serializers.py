from rest_framework import serializers
from apps.cages.models import Cage

class CageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cage
        fields = "__all__"

    def validate_count_rabbits(self, value):
        if value < 0:
            raise serializers.ValidationError("El número de conejos debe ser igual o mayor que 0.")
        return value

    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError("El precio debe ser igual o mayor que 0.")
        return value
