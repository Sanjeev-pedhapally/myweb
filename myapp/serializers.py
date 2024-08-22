# myapp/serializers.py
from rest_framework import serializers
from .models import EPLResult

class EPLResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = EPLResult
        fields = '__all__'
