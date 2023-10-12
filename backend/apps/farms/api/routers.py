from apps.farms.api.viewsets import FarmViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"farm", FarmViewset, basename="farm")
urlpatterns = router.urls
