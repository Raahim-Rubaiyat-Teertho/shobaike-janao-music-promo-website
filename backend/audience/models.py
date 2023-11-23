from django.db import models
from artist.models import Artist
# Create your models here.
class Audience(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128) 
    username = models.CharField(max_length=30, unique=True)
    followed_artists = models.ManyToManyField(Artist, blank=True)

    def __str__(self):
        return self.username
    
class AudiencePost(models.Model):
    posted_by = models.ForeignKey(Audience, on_delete=models.CASCADE)
    body = models.TextField()
    upvotes = models.IntegerField(null=True, default=0)

    def __str__(self):
        return f"Post by {self.posted_by.username}"
    
class PostUpvoteAudience(models.Model):
    post = models.ForeignKey('audience.AudiencePost', on_delete=models.CASCADE)
    voted_by_artists = models.ManyToManyField('artist.Artist', blank=True)
    voted_by_audiences = models.ManyToManyField('audience.Audience', blank=True)

    def __str__(self):
        return f"Upvotes for {self.post}"