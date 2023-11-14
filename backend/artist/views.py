from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ArtistSerializer

from .models import Artist

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

@api_view(['POST'])
def artistSignup(request):
    serializer = ArtistSerializer(data=request.data)

    if(serializer.is_valid()):
        serializer.save()

    return Response(serializer.data)
