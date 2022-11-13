from rest_framework.routers import DefaultRouter
from person.api.views import PersonApiViewSet

router_persons = DefaultRouter()
router_persons.register(prefix='person', basename='person', viewset=PersonApiViewSet)