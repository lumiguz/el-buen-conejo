from rest_framework import routers
from .viewsets import CageViewSet

router = routers.DefaultRouter()
router.register(r'cages', CageViewSet)
