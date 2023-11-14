from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import AudienceSerializer

from .models import Audience

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