from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("api/", views.apiOverview, name="apiOverview"),
    path("audience-list/", views.audienceList, name="audienceList"),
    path("audience-list/<str:pk>", views.audienceDetail, name="audienceDetail"),
    path("audience-detail-id/<str:pk>", views.audienceDetailId, name="audienceDetailId"),
    path("audience-list-email/<str:pk>", views.audienceDetailEmail, name="audienceDetailEmail"),
    path('signup/', views.audienceSignup, name="audienceSignup"),
    path('posts/', views.audiencePosts, name='audiencePosts'),
    path("posts/create/", views.createPostAudience, name='createPostAudience'),
    path("posts/delete/<str:pk>", views.deletePostAudience, name='deletePostAudience'),
    path("posts/<str:pk>", views.audiencePostsbyPostId, name='audiencePostsbyPostId'),
    path("posts-by/<str:pk>", views.audiencePostsbyAudienceId, name='audiencePostsbyAudienceId'),
    path('posts/upvotes/<str:pk>', views.getAudiencePostUpvoteById, name='getAudiencePostUpvoteById'),
    path('posts/update-upvotes/<str:pk>', views.updateAudienceVotes, name='updateAudienceVotes'),
]