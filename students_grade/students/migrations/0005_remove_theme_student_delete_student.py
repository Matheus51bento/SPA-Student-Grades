# Generated by Django 4.2.10 on 2024-03-05 12:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0004_alter_grade_theme'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='theme',
            name='student',
        ),
        migrations.DeleteModel(
            name='Student',
        ),
    ]
