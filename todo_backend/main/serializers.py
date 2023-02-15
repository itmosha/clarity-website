from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        lookup_field = 'unique_uuid'
        extra_kwargs = {
            'url': { 'lookup_field': 'unique_uuid' }
        }

class ColumnSerializer(serializers.HyperlinkedModelSerializer):
    tasks = TaskSerializer(many=True)
    class Meta:
        model = Column
        lookup_field = 'unique_uuid'
        extra_kwargs = {
            'url': { 'lookup_field': 'unique_uuid' }
        }


class TableSerializer(serializers.HyperlinkedModelSerializer):
    columns = ColumnSerializer(many=True)

    class Meta:
        model = Table
        lookup_field = 'unique_uuid'
        extra_kwargs = {
            'url': { 'lookup_field': 'unique_uuid' }
        }