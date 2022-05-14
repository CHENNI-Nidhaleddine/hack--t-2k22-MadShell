from rest_framework import  permissions
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response

@api_view(['GET'])
def index(request):
    return Response("Hello, World!")