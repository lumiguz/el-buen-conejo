import datetime
from rest_framework import serializers
from apps.rabbits.models import Rabbit


class RabbitSerializer(serializers.ModelSerializer):
    age = serializers.SerializerMethodField()

    class Meta:
        model = Rabbit
        fields = "__all__"
        # Cant update or eliminate
        read_only_fields = ("created", "id", "age",)

    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError(
                "El precio no puede ser inferior a 0")
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
   
    def create(self, validated_data):
        cage = validated_data.get('cage_id')
        rabbit = Rabbit.objects.create(**validated_data)
        
        cage.count_rabbits += 1  
        cage.price += rabbit.price  
        cage.total_weight += rabbit.weight  
        cage.save()  
        return rabbit
    def update(self, instance, validated_data):
        
        cage = instance.cage_id
        
        cage.price -= instance.price
        cage.total_weight -= instance.weight
        
        instance.breed = validated_data.get('breed', instance.breed)
        instance.genre = validated_data.get('genre', instance.genre)
        instance.birthday = validated_data.get(
            'birthday', instance.birthday)
        instance.price = validated_data.get('price', instance.price)
        instance.tag = validated_data.get('tag', instance.tag)
        instance.weight = validated_data.get('weight', instance.weight)
        instance.photo = validated_data.get('photo', instance.photo)
        instance.save()  
        
        cage.price += instance.price
        cage.total_weight += instance.weight
        cage.save()  
        return instance