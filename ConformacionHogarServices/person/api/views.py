from rest_framework.viewsets import ModelViewSet
from person.models import Person
from person.api.serializers import PersonSerializer

class PersonApiViewSet(ModelViewSet):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()