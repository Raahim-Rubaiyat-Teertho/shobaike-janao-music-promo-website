from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("api/", views.apiOverview, name='apiOverview'),
    path("artists/", views.artistList, name='artistsList'),
    path("artist-detail/<str:pk>/", views.artistDetail, name='artistDetail'),
    path("artist-detail-id/<str:pk>/", views.artistDetailId, name='artistDetailId'),
    path("artist-detail-email/<str:pk>/", views.artistDetailEmail, name='artistDetailEmail'),
    path("signup/", views.artistSignup, name='artistSignup'),
    path('api/post-session', views.artistSession, name='artistSession'),
    path("api/get-session/", views.artistSessionGet, name='get_session_data'),
    # path("api/post-session-data/", views.post_session_data, name='post_session_data'),
    path("posts/", views.artistPosts, name='artistPosts'),
    path("posts/create/", views.createPostArtist, name='createPostArtist'),
    path("posts/delete/<str:pk>", views.deletePostArtist, name='deletePostArtist'),
    path("posts/<str:pk>", views.artistPostsbyPostId, name='artistPostsbyPostId'),
    path("posts-by/<str:pk>", views.artistPostsbyArtistId, name='artistPostsbyArtistId'),
    path('posts/upvotes/<str:pk>', views.getPostUpvoteById, name='getPostUpvoteById'),
    path('posts/update-upvotes/<str:pk>', views.updateVotes, name='updateVotes'),
]