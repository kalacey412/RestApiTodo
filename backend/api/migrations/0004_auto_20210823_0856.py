# Generated by Django 3.2.6 on 2021-08-23 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_alter_user_username"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="name",
        ),
        migrations.AlterField(
            model_name="user",
            name="username",
            field=models.CharField(max_length=255),
        ),
    ]
