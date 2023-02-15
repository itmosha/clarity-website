from django.contrib import admin
from django.urls import path
from main.views import *
from knox import views as knox_views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('api/tables/', TablesAPI.as_view(), name='tables'),
    path('api/columns/', ColumnsAPI.as_view(), name='columns'),
    path('api/tasks/', TasksAPI.as_view(), name='tasks'),   
]

urlpatterns = format_suffix_patterns(urlpatterns)