import uuid
from django.db import models
from django.utils.translation import gettext_lazy as _


class Table(models.Model):
    unique_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=1000)
    description = models.TextField(max_length=1000, blank=True, null=True)

    def columns(self):
        return Column.objects.filter(_table=self)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created']
        verbose_name = 'Table'
        verbose_name_plural = 'Tables'    


class Column(models.Model):
    class ColumnColor(models.TextChoices):
        WHITE = 'WH', _('White')
        YELLOW = 'YE', _('Yellow')
        RED = 'RE', _('Red')
        GREEN = 'GR', _('Green')
        BLUE = 'BL', _('Blue')
        PURPLE = 'PU', _('Purple')
        PINK = 'PI', _('Pink')

    _table = models.ForeignKey(Table, on_delete=models.CASCADE)

    unique_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=1000)
    heading_color = models.CharField(max_length=2, choices=ColumnColor.choices, default=ColumnColor.WHITE)

    def tasks(self):
        return Task.objects.filter(_column=self)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['created']
        verbose_name = 'Column'
        verbose_name_plural = 'Columns'


class Task(models.Model):
    _column = models.ForeignKey(Column, on_delete=models.CASCADE)

    unique_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
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

