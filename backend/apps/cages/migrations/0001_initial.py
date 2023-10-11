# Generated by Django 4.2.6 on 2023-10-10 02:42

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("farms", "0002_remove_rabbit_cage_id_delete_cage_delete_rabbit"),
    ]

    operations = [
        migrations.CreateModel(
            name="Cage",
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
                ("count_rabbits", models.IntegerField(default=0)),
                ("price", models.DecimalField(decimal_places=2, max_digits=5)),
                ("is_public", models.BooleanField(default=False)),
                ("is_active", models.BooleanField(default=True)),
                (
                    "farm_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="farms.farm"
                    ),
                ),
            ],
        ),
    ]
