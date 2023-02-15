from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import login
from knox.models import AuthToken
from knox.views import LoginView as KnoxLoginView
from .serializers import *
from .models import *


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


class TablesAPI(generics.ListCreateAPIView):
    queryset = Table.objects.all()
    serializer_class = TableSerializer
    lookup_field = 'unique_uuid'
    permission_classes = [ permissions.BasePermission ]

class ColumnsAPI(generics.ListCreateAPIView):
    queryset = Column.objects.all()
    serializer_class = ColumnSerializer
    lookup_field = 'unique_uuid'
    permission_classes = [ permissions.BasePermission ]

class TasksAPI(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_field = 'unique_uuid'
    permission_classes = [ permissions.BasePermission ]