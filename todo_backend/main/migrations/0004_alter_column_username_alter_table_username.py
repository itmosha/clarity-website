# Generated by Django 4.1.6 on 2023-02-19 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_alter_column_options_column_heading_color_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='column',
            name='username',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='table',
            name='username',
            field=models.CharField(max_length=100),
        ),
    ]
