# Generated by Django 3.2.6 on 2021-08-23 12:44

import django.contrib.auth.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0004_auto_20210823_0856"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="user_name",
            field=models.CharField(default="Name", max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.EmailField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="username",
            field=models.CharField(
                error_messages={"unique": "A user with that username already exists."},
                help_text="Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.",
                max_length=150,
                unique=True,
                validators=[django.contrib.auth.validators.UnicodeUsernameValidator()],
                verbose_name="username",
            ),
        ),
    ]
