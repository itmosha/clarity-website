from django.contrib import admin
from .models import Table, Column, Task

admin.site.register(Table)
admin.site.register(Column)
admin.site.register(Task)