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
    path('api/tables/', TablesListAPIView.as_view(), name='tables'),
    path('api/tables/<str:unique_uuid>/', TableDetailAPIView.as_view(), name='table-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)