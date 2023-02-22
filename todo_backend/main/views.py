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
        userId_provided = int(request.META.get('HTTP_USER_ID'))
        username_provided = request.META.get('HTTP_USERNAME')
        token_provided = request.META.get('HTTP_AUTHORIZATION')[6:]

        if userId_provided and username_provided and token_provided:
            tokens = AuthToken.objects.filter(user_id=userId_provided).values()
            tokens_list = [token for token in tokens]
            if len(tokens_list) == 0:
                return Response(status=status.HTTP_403_FORBIDDEN)
            else:
                for token in tokens_list:
                    if token.get('user_id') == int(userId_provided) and token_provided.startswith(token.get('token_key')):
                        tables = Table.objects.filter(username=username_provided)
                        serializer_context = {"request": request,}
                        serializer = TableSerializer(tables, context=serializer_context, many=True)
        
                        return Response({"tables": serializer.data}, status=status.HTTP_200_OK)
                return Response(status=status.HTTP_403_FORBIDDEN)
        return Response(status=status.HTTP_403_FORBIDDEN)

class ColumnsListAPIView(generics.ListCreateAPIView):
    serializer_class = ColumnSerializer
    permission_classes = [permissions.IsAdminUser]
    
    def get(self, request):
        columns = Column.objects.all()
        serializer_context = {"request": request,}
        serializer = ColumnSerializer(columns, context=serializer_context, many=True)
        return Response({"columns": serializer.data}, status=status.HTTP_200_OK)
       
    def post(self, request):
        print(request.data)
        column = {"username": request.data.get('username'),
                  "table_url": request.data.get('table_url'),
                  "tasks": request.data.get('tasks'),
                  "title": request.data.get('title'), 
                  "heading_color": request.data.get('heading_color') }
        serializer = ColumnSerializer(data=column)
        if serializer.is_valid(raise_exception=True):
            column_saved = serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    
class ColumnByIdAPIView(generics.RetrieveDestroyAPIView):
    serializer_class = ColumnSerializer
    queryset = Column.objects
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'unique_uuid'
    
    def delete(self, request, unique_uuid=None):
        column = Column.objects.filter(unique_uuid=unique_uuid)
        column.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TasksListAPIView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAdminUser]
    
    def get(self, request):
        tasks = Task.objects.all()
        serializer_context = {"request": request,}
        serializer = TaskSerializer(tasks, context=serializer_context, many=True)
        return Response({"tasks": serializer.data}, status=status.HTTP_200_OK)

    def post(self, request):
        task = {"username": request.data.get('username'),
                "column_url": request.data.get('column_url'),
                "title": request.data.get('title'), 
                "description": request.data.get('description'),
                "completed": request.data.get('completed') }
        serializer = TaskSerializer(data=task)
        if serializer.is_valid(raise_exception=True):
            task_saved = serializer.save()
        return Response(status=status.HTTP_201_CREATED)


class TaskByIdAPIView(generics.RetrieveDestroyAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'unique_uuid'
    
    def delete(self, request, unique_uuid=None):
        task = Task.objects.filter(unique_uuid=unique_uuid)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)