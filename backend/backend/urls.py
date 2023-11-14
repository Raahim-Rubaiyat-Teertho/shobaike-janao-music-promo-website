from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path("artist/", include("artist.urls")),
    path("audience/", include("audience.urls"))
]
