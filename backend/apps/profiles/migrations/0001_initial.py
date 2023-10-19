# Generated by Django 4.2.6 on 2023-10-18 20:09

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Profile",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("is_producer", models.BooleanField(default=False)),
                ("first_name", models.CharField(blank=True, max_length=50, null=True)),
                ("last_name", models.CharField(blank=True, max_length=100, null=True)),
                ("photo", models.CharField(blank=True, max_length=255)),
                ("address", models.CharField(blank=True, max_length=150, null=True)),
                (
                    "qualification",
                    models.DecimalField(decimal_places=2, default=0, max_digits=5),
                ),
                ("is_active", models.BooleanField(default=True)),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
            ],
            options={
                "verbose_name": "Perfil",
                "verbose_name_plural": "Perfiles",
            },
        ),
    ]
