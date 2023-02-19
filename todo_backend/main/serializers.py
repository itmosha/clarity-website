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


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Task
        lookup_field = 'unique_uuid'
        extra_kwargs = {
            'url': { 'lookup_field': 'unique_uuid' }
        }

        def create(self, validated_data):
            return Task.objects.create(**validated_data)

class ColumnSerializer(serializers.ModelSerializer):
    class Meta:
        tasks = TaskSerializer(many=True)
        fields = '__all__'
        model = Column
        lookup_field = 'unique_uuid'
        extra_kwargs = {
            'url': { 'lookup_field': 'unique_uuid' }
        }

        def create(self, validated_data):
            return Column.objects.create(**validated_data)


class TableSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        columns = ColumnSerializer(many=True)
        fields = '__all__'
        model = Table
        lookup_field = 'unique_uuid'
        extra_kwargs = {
            'url': { 'lookup_field': 'unique_uuid' }
        }
        
        def create(self, validated_data):
            return Table.objects.create(**validated_data)