from .models import Audience
from rest_framework import serializers

class AudienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audience
        fields = "__all__"