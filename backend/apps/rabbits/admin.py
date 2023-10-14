from django.contrib import admin
from apps.rabbits.models import Rabbit


class RabbitAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "cage_id",
        "breed",
        "genre",
        "price",
        "tag",
        "weight",
    )
    search_fields = (
        "id",
        "cage_id",
        "breed",
        "genre",
        "price",
        "tag",
        "weight",
    )
    ordering = ("breed",)
    pass


admin.site.register(Rabbit, RabbitAdmin)
