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