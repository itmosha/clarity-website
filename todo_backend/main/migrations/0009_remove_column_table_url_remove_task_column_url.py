# Generated by Django 4.1.6 on 2023-03-06 20:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_table_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='column',
            name='table_url',
        ),
        migrations.RemoveField(
            model_name='task',
            name='column_url',
        ),
    ]
