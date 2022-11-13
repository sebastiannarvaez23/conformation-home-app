from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view

from .models import Person
from .api.serializers import PersonSerializer
# Create your views here.
import time

@api_view(['GET'])
def get_persons(request):
    person = Person.objects.all()
    serializer = PersonSerializer(person, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def post_person(request):
    data = request.data
    print(request.data)
    person = Person.objects.create(
        is_head_household=data['is_head_household'],
        first_name=data['first_name'],
        second_name=data['second_name'],
        first_last_name=data['first_last_name'],
        second_last_name=data['second_last_name'],
        date_birth=data['date_birth'],
        type_identification=data['type_identification'],
        num_identification=data['num_identification'],
    )
    serializer = PersonSerializer(person, many=False)
    return Response(serializer.data)