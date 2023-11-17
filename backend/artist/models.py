from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=255)
    bio = models.TextField(blank=True, null=True)
    genre = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class ArtistPost(models.Model):
    posted_by = models.ForeignKey(Artist, on_delete=models.CASCADE)
    body = models.TextField()
    upvotes = models.IntegerField(null=True, default=0)

    def __str__(self):
        return f"Post by {self.posted_by.name}"