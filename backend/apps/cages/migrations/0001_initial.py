# Generated by Django 4.2.6 on 2023-10-25 02:44

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("apps_farms", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Cage",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        db_index=True,
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                        unique=True,
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                ("is_active", models.BooleanField(default=True)),
                ("count_rabbits", models.IntegerField(default=0)),
                (
                    "price",
                    models.DecimalField(decimal_places=2, default=0, max_digits=5),
                ),
                ("is_public", models.BooleanField(default=False)),
                ("photo", models.CharField(blank=True, max_length=255)),
                ("total_weight", models.IntegerField(default=0)),
                (
                    "farm_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="apps_farms.farm",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
