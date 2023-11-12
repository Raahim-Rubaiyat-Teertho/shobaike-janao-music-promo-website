from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("api/", views.apiOverview, name='apiOverview'),
    path("artists/", views.artistList, name='artistsList'),
    path("<str:pk>/", views.artistDetail, name='artistDetail'),
    path("signup/", views.artistSignup, name='artistSignup'),
]