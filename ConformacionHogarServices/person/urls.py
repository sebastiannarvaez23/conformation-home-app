from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.get_persons),
    path('post/', views.post_person),
]