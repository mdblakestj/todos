# api/views.py
from rest_framework import generics

from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)

from rest_framework.viewsets import GenericViewSet

from todos.models import Todo
from .serializers import TodoSerializer



class TodoViewSet(GenericViewSet,  # generic view functionality
                     CreateModelMixin,  # handles POSTs
                     RetrieveModelMixin,  # handles GETs for 1 Company
                     UpdateModelMixin,  # handles PUTs and PATCHes
                     ListModelMixin):  # handles GETs for many Companies

      serializer_class = TodoSerializer
      queryset = Todo.objects.all()
