from django.contrib import admin
from apps.rabbits.models import Rabbit


class RabbitAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "cage_id",
        "breed",
        "tag",
        "genre",
        "birthday",
        "price",
        "weight",
        "is_active",
    )
    search_fields = (
        "id",
        "cage_id",
        "breed",
        "tag",
        "genre",
        "birthday",
        "price",
        "weight",
        "is_active",
    )
    ordering = ("breed",)
    pass


admin.site.register(Rabbit, RabbitAdmin)
