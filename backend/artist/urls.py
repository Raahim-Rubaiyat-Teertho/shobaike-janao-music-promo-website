from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("api/", views.apiOverview, name='apiOverview'),
    path("artists/", views.artistList, name='artistsList'),
    path("artist-detail/<str:pk>/", views.artistDetail, name='artistDetail'),
    path("artist-detail-email/<str:pk>/", views.artistDetailEmail, name='artistDetailEmail'),
    path("signup/", views.artistSignup, name='artistSignup'),
    path('api/post-session', views.artistSession, name='artistSession'),
    path("api/get-session/", views.artistSessionGet, name='get_session_data'),
    # path("api/post-session-data/", views.post_session_data, name='post_session_data')
]