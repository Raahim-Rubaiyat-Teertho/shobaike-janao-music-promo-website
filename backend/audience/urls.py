from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("api/", views.apiOverview, name="apiOverview"),
    path("audience-list/", views.audienceList, name="audienceList"),
    path("audience-list/<str:pk>", views.audienceDetail, name="audienceDetail"),
    path("audience-list-email/<str:pk>", views.audienceDetailEmail, name="audienceDetailEmail"),
    path('signup/', views.audienceSignup, name="audienceSignup")
]