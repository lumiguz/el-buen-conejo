from apps.catalogs.api.viewsets import StateViewSet
from rest_framework import routers

routers = routers.DefaultRouter()
routers.register(r"states", StateViewSet, basename="states")
urlpatterns = routers.urls
