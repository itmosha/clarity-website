# Generated by Django 4.1.6 on 2023-02-15 16:55

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Column',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unique_uuid', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=1000)),
                ('heading_color', models.CharField(choices=[('WH', 'White'), ('YE', 'Yellow'), ('RE', 'Red'), ('GR', 'Green'), ('BL', 'Blue'), ('PU', 'Purple'), ('PI', 'Pink')], default='WH', max_length=2)),
            ],
            options={
                'verbose_name': 'Column',
                'verbose_name_plural': 'Columns',
                'ordering': ['created'],
            },
        ),
        migrations.CreateModel(
            name='Table',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unique_uuid', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=1000)),
                ('description', models.TextField(blank=True, max_length=1000, null=True)),
            ],
            options={
                'verbose_name': 'Table',
                'verbose_name_plural': 'Tables',
                'ordering': ['created'],
            },
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unique_uuid', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=1000)),
                ('description', models.TextField(blank=True, max_length=10000, null=True)),
                ('completed', models.BooleanField(default=False)),
                ('_column', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.column')),
            ],
            options={
                'verbose_name': 'Task',
                'verbose_name_plural': 'Tasks',
                'ordering': ['created'],
            },
        ),
        migrations.AddField(
            model_name='column',
            name='_table',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.table'),
        ),
    ]
