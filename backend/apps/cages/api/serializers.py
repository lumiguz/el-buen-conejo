from rest_framework import serializers
from apps.cages.models import Cage

class CageSerializer(serializers.ModelSerializer):
    price = serializers.DecimalField(max_digits=5, decimal_places=2)
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

class CageListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cage
        fields = ("id", "farm_id", "count_rabbits", "price", "is_public", "is_active", "photo")

class CageUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cage
        fields = ("count_rabbits", "price", "is_public", "photo")

class CageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cage
        fields = ("farm_id", "count_rabbits", "price", "photo")

    def validate_count_rabbits(self, value):
        if value < 0:
            raise serializers.ValidationError("El número de conejos debe ser igual o mayor que 0.")
        return value

    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError("El precio debe ser igual o mayor que 0.")
        return value
