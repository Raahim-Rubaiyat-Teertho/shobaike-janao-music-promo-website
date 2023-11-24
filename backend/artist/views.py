from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ArtistSerializer, ArtistSessionSerializer, ArtistPostSerializer, PostUpvoteSerializer

from .models import Artist, ArtistPost, PostUpvote
from django.shortcuts import get_object_or_404
from rest_framework import status

def index(request):
    return HttpResponse("Hello, world. You're at the artist index.")

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List' : '/artists-list/',
        'Detail View' : '/<str:pk>',
        'signup' : '/signup',
    }

    return Response(api_urls)

@api_view(['GET'])
def artistList(request):
    artists = Artist.objects.all()
    serializer = ArtistSerializer(artists, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def artistDetail(request, pk):
    artist = Artist.objects.get(name = pk)
    serializer = ArtistSerializer(artist, many = False)
    return Response(serializer.data)

@api_view(['GET'])
def artistDetailEmail(request, pk):
    artist = Artist.objects.get(email = pk)
    serializer = ArtistSerializer(artist, many = False)
    return Response(serializer.data)

@api_view(['GET'])
def artistDetailId(request, pk):
    artist = Artist.objects.get(id = pk)
    serializer = ArtistSerializer(artist, many = False)
    return Response(serializer.data)

@api_view(['POST'])
def artistSignup(request):
    serializer = ArtistSerializer(data=request.data)

    if(serializer.is_valid()):
        serializer.save()

    return Response(serializer.data)

# @csrf_exempt
# def post_session_data(request):
#     if(request.method == 'POST'):
#         data = request.POST

#         print(data)
#         for key, value in data.items():
#             request.session[key] = value

#         request.session.save()
#         print(request.session['key1'])
#         return JsonResponse({'message': 'Session data updated successfully'})

#     else:
#         return JsonResponse({'message' : 'Method not allowed'}, status=405)
    
@api_view(['POST'])
def artistSession(request):
    serializer = ArtistSessionSerializer(data=request.data)

    if(serializer.is_valid()):
        data = serializer.validated_data
        print(data)
        for key, value in data.items():
            request.session[key] = value
        
        return Response({'data': data})
    return Response({'message': 'Invalid data'}, status=400)

@api_view(['GET'])
def artistSessionGet(request):
    session_data = dict(request.session.items())
    print(session_data)
    return JsonResponse(session_data)


#posts views
@api_view(['GET'])
def artistPosts(request):
    posts = ArtistPost.objects.all()
    serializer = ArtistPostSerializer(posts, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def createPostArtist(request):
    serializer = ArtistPostSerializer(data=request.data)

    if(serializer.is_valid()):
        serializer.save()

    return Response(serializer.data)

@api_view(['GET'])
def artistPostsbyPostId(request, pk):
    post = ArtistPost.objects.get(id = pk)
    serializer = ArtistPostSerializer(post)
    return Response(serializer.data)

@api_view(['GET'])
def artistPostsbyArtistId(request, pk):
    post = ArtistPost.objects.filter(posted_by = pk)
    serializer = ArtistPostSerializer(post, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
def deletePostArtist(request, pk):
    post = ArtistPost.objects.get(id=pk)
    post.delete()

    return HttpResponse('Deleted')

@api_view(['GET'])
def getPostUpvoteById(request, pk):
    post = PostUpvote.objects.filter(post_id=pk)
    serializer = PostUpvoteSerializer(post, many=True)
    return Response(serializer.data)

# @api_view(['POST'])
# def updateVotes(request, pk):
#     vote = ArtistPost.objects.get(id=pk)
#     upvote = get_object_or_404(PostUpvote, post=vote.id)
#     serializer = PostUpvoteSerializer(instance = upvote, data = request.data)

#     if(serializer.is_valid()):
#         serializer.save()

#     return Response(serializer.data)

@api_view(['PUT'])
def updateVotes(request, pk):
    vote = get_object_or_404(ArtistPost, id=pk)
    upvote, created = PostUpvote.objects.get_or_create(post=vote)

    serializer = PostUpvoteSerializer(instance=upvote, data=request.data)

    if serializer.is_valid():
        serializer.save()

    print(serializer.data)

    return Response(serializer.data)