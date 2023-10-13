from rest_framework.viewsets import ModelViewSet
from apps.profiles.api.serializer import ProfileSerializer
from utils.pagination import ExtendedPagination

class ProfileModelViewSet(ModelViewSet):
    serializer_class = ProfileSerializer
    pagination_class = ExtendedPagination
    def get_queryset(self):
        return self.serializer_class.Meta.model.objects.filter(is_active=True).order_by("last_name")