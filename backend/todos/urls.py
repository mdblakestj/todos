# from django.urls import path
#
# from .views import ListTodo, DetailTodo
#
# urlpatterns = [
#     path('<int:pk>/', DetailTodo.as_view()),
#     path('', ListTodo.as_view())
# ]

# urls.py
from django.conf.urls import include, re_path
from rest_framework.routers import DefaultRouter
from .views import TodoViewSet


router = DefaultRouter()
router.register(r'todo', TodoViewSet, base_name='todo')

urlpatterns = [
    re_path('^', include(router.urls)),
]
