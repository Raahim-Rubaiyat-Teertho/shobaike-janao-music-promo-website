from django.contrib import admin
from .models import Audience
# Register your models here.
admin.site.register(Audience, list_display=('email', 'password', 'username'), search_fields=('email', 'username'), list_filter=('email', 'username'))