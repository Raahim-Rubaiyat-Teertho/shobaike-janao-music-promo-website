from django.contrib import admin
from .models import Artist, ArtistPost, PostUpvote
# Register your models here.

admin.site.register(Artist, list_display=('name', 'email', 'location', 'genre'), search_fields=('name', 'email', 'location', 'genre'), list_filter=('genre', 'location'))
admin.site.register(ArtistPost)
admin.site.register(PostUpvote)