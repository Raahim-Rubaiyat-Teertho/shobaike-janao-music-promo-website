from .models import Audience, AudiencePost, PostUpvoteAudience
from rest_framework import serializers

class AudienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audience
        fields = "__all__"

class AudiencePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudiencePost
        fields = "__all__"

class PostUpvoteAudienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostUpvoteAudience
        fields = "__all__"