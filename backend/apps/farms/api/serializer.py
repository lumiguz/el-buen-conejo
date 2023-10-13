from rest_framework import serializers
from ..models import Farm


class farmSerializer(serializers.ModelSerializer):
	class Meta:
		model = Farm
		fields = '__all__'