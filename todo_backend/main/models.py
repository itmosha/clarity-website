import uuid
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.postgres.fields import ArrayField


class Table(models.Model):
    unique_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    username = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=1000)
    description = models.TextField(max_length=1000, blank=True, null=True)

    columns = ArrayField(models.URLField(max_length=500, blank=True))

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created']
        verbose_name = 'Table'
        verbose_name_plural = 'Tables'    


class Column(models.Model):
    table_url = models.URLField()
    table = models.ForeignKey(Table, on_delete=models.CASCADE, null=True)
    class ColumnColor(models.TextChoices):
        WHITE = 'WH', _('White')
        YELLOW = 'YE', _('Yellow')
        RED = 'RE', _('Red')
        GREEN = 'GR', _('Green')
        BLUE = 'BL', _('Blue')
        PURPLE = 'PU', _('Purple')
        PINK = 'PI', _('Pink')


    unique_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    username = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=1000, blank=False)
    heading_color = models.CharField(max_length=2, choices=ColumnColor.choices, default=ColumnColor.WHITE)

    tasks = ArrayField(models.CharField(max_length=500, blank=True))

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['created']
        verbose_name = 'Column'
        verbose_name_plural = 'Columns'


class Task(models.Model):
    column_url = models.URLField()
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

