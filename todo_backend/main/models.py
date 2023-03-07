import uuid
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.postgres.fields import ArrayField


class Table(models.Model):
    unique_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    username = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    slug = models.CharField(max_length=1000, blank=False)
    title = models.CharField(max_length=1000, blank=False)
    description = models.TextField(max_length=1000, blank=True, null=True)

    def columns(self):
        return Column.objects.filter(table=self)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created']
        verbose_name = 'Table'
        verbose_name_plural = 'Tables'    


class Column(models.Model):
    table = models.ForeignKey(Table, on_delete=models.CASCADE, null=True)

    unique_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    username = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=1000, blank=False)

    def tasks(self):
        return Task.objects.filter(column=self)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['created']
        verbose_name = 'Column'
        verbose_name_plural = 'Columns'


class Task(models.Model):
    column = models.ForeignKey(Column, on_delete=models.CASCADE, null=True)

    unique_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    username = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=1000)
    description = models.TextField(max_length=10000, blank=True, null=True)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['created']
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'

