from .models import Artist
from rest_framework import serializers

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = "__all__"

class ArtistSessionSerializer(serializers.Serializer):
    key1 = serializers.CharField()
    key2 = serializers.CharField()