from rest_framework import serializers
from .models import Cage


class CageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cage
        fields = '__all__'


def validate_count_rabbits(self, value):
    """
    Validate the count of rabbits.

    Args:
        value (int): The count of rabbits.

    Returns:
        int: The validated count of rabbits.

    Raises:
        serializers.ValidationError: If the count is less than 0.
    """
    if value < 0:
        raise serializers.ValidationError(
            "El número de conejos debe ser igual o mayor que 0.")
    return value


def validate_price(self, value):
    """
    Validate the price value.

    Args:
        value (float): The price value to be validated.

    Raises:
        serializers.ValidationError: If the price value is less than 0.

    Returns:
        float: The validated price value.
    """
    if value < 0:
        raise serializers.ValidationError(
            "The price must be equal to or greater than 0.")
    return value
