from django.contrib import admin
from apps.rabbits.models import Rabbit


class RabbitAdmin(admin.ModelAdmin):
    # list_display = ("", "", "", "")
    # search_fields = ("", "")
    # ordering = ("",)
    pass


admin.site.register(Rabbit, RabbitAdmin)
