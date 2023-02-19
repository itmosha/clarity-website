from rest_framework import generics, permissions, views, status
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
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


class TablesListAPIView(generics.ListCreateAPIView):
    serializer_class = TableSerializer
    permission_classes = [permissions.IsAdminUser]
    
    def get(self, request):
        tables = Table.objects.all()
        serializer_context = {"request": request,}
        serializer = TableSerializer(tables, context=serializer_context, many=True)
        return Response({"tables": serializer.data})
    
    def post(self, request):
        table = {"username": request.data.get('username'),
                 "title": request.data.get('title'), 
                 "description": request.data.get('description') }
        serializer = TableSerializer(data=table)
        if serializer.is_valid(raise_exception=True):
            table_saved = serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    
class TableByIdAPIView(generics.RetrieveDestroyAPIView):
    serializer_class = TableSerializer
    queryset = Table.objects
    permission_classes = [permissions.IsAdminUser]
    lookup_field = 'unique_uuid'
    
    def delete(self, request, unique_uuid=None):
        table = Table.objects.filter(unique_uuid=unique_uuid)
        table.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class TableByUsernameAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TableSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'username'

    def get(self, request, username=None):
        tables = Table.objects.filter(username=username)
        serializer_context = {"request": request,}
        serializer = TableSerializer(tables, context=serializer_context, many=True)
        return Response({"tables": serializer.data})
    

# class ColumnsAPI(generics.ListCreateAPIView):
#     queryset = Column.objects.all()
#     serializer_class = ColumnSerializer
#     lookup_field = 'unique_uuid'
#     permission_classes = [ permissions.BasePermission ]

# class TasksAPI(generics.ListCreateAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
#     lookup_field = 'unique_uuid'
#     permission_classes = [ permissions.BasePermission ]