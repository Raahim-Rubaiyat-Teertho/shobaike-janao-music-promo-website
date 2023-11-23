from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import AudienceSerializer, AudiencePostSerializer, PostUpvoteAudienceSerializer

from .models import Audience, AudiencePost, PostUpvoteAudience

from django.shortcuts import get_object_or_404
from rest_framework import status

# Create your views here.
def index(request):
    return HttpResponse('You are at the Audience Index')

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List' : '/audience-list/',
        'Detail View' : 'audience-list/<str:pk>',
        'signup' : '/signup',
    }

    return Response(api_urls)

@api_view(['GET'])
def audienceList(request):
    users = Audience.objects.all()
    serializer = AudienceSerializer(users, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def audienceDetail(request, pk):
    user = Audience.objects.get(username = pk)
    serializer = AudienceSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def audienceDetailId(request, pk):
    user = Audience.objects.get(id = pk)
    serializer = AudienceSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def audienceDetailEmail(request, pk):
    user = Audience.objects.get(email = pk)
    serializer = AudienceSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def audienceSignup(request):
    serializer = AudienceSerializer(data=request.data)

    if(serializer.is_valid()):
        serializer.save()

    return Response(serializer.data)

@api_view(['GET'])
def audiencePosts(request):
    posts = AudiencePost.objects.all()
    serializer = AudiencePostSerializer(posts, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def createPostAudience(request):
    serializer = AudiencePostSerializer(data=request.data)

    if(serializer.is_valid()):
        serializer.save()

    return Response(serializer.data)

@api_view(['GET'])
def audiencePostsbyPostId(request, pk):
    post = AudiencePost.objects.get(id = pk)
    serializer = AudiencePostSerializer(post)
    return Response(serializer.data)

@api_view(['GET'])
def audiencePostsbyAudienceId(request, pk):
    post = AudiencePost.objects.filter(posted_by = pk)
    serializer = AudiencePostSerializer(post, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getAudiencePostUpvoteById(request, pk):
    post = PostUpvoteAudience.objects.filter(post_id=pk)
    serializer = PostUpvoteAudienceSerializer(post, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def updateAudienceVotes(request, pk):
    vote = get_object_or_404(AudiencePost, id=pk)
    upvote, created = PostUpvoteAudience.objects.get_or_create(post=vote)
    serializer = PostUpvoteAudienceSerializer(instance=upvote, data=request.data)

    if serializer.is_valid():
        serializer.save()

    print(serializer.data)

    return Response(serializer.data)