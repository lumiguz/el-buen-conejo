import datetime
from rest_framework import serializers
from apps.rabbits.models import Rabbit


class RabbitSerializer(serializers.ModelSerializer):
    age = serializers.SerializerMethodField()

    class Meta:
        model = Rabbit
        fields = "__all__"
        # Cant update or eliminate
        read_only_fields = ("created", "id", "age")

    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError("El precio no puede ser inferior a 0")
        return value

    def validate_birthday(self, value):
        if value > datetime.datetime.now().date():
            raise serializers.ValidationError(
                f"El nacimiento no puede ser mayor que la fecha actual: {datetime.datetime.now().date()}"
            )
        return value

    def get_age(self, rabbit):
        if rabbit.birthday:
            age = (datetime.date.today() - rabbit.birthday).days
            return age
        return None
