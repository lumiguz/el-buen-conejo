from rest_framework import serializers
from apps.cages.models import Cage


class CageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cage
        fields = "__all__"

    # count_rabbits validation
    def validate_count_rabbits(self, value):
        if value < 0:
            raise serializers.ValidationError(
                "El número de conejos debe ser igual o mayor que 0."
            )
        return value

    # price validation
    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError("El precio debe ser igual o mayor que 0.")
        return value
    
    # price validation if count_rabbits > 0
    def validate(self, data):
        count_rabbits = data.get('count_rabbits')
        price = data.get('price')
        
        if count_rabbits > 0 and price == 0:
            raise serializers.ValidationError("El precio debe ser mayor que 0 si hay conejos en la jaula.")
        
        return data