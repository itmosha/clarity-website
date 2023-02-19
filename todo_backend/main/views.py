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
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


class TablesListAPIView(generics.ListCreateAPIView):
    serializer_class = TableSerializer
    # permission_classes = [ permissions.IsAdminUser ]
    
    def get(self, request):
        tables = Table.objects.all()
        serializer_context = { 'request': request, }
        serializer = TableSerializer(tables, context=serializer_context, many=True)
        return Response({"tables": serializer.data})
    
    def post(self, request):
        table = { "title": request.data.get('title'), "description": request.data.get('description') }
        print(request.data)
        serializer = TableSerializer(data=table)
        if serializer.is_valid(raise_exception=True):
            table_saved = serializer.save()
        return Response({"success": "Table created"})
    
    
class TableDetailAPIView(generics.RetrieveAPIView):
    serializer_class = TableSerializer
    queryset = Table.objects
    lookup_field = 'unique_uuid'

    def delete(self, request, pk):
        table = get_object_or_404(Table.objects.all(), pk=pk)
        table.delete()
        return Response({"success": "Table deleted"})
    

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