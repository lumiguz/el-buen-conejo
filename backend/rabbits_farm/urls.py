"""rabbits_farm URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from apps.users.views import Login, Logout
from django.contrib import admin
from django.urls import include, path, re_path
from apps.cages.api.routers import router as cages_router


urlpatterns = [
    path("admin/", admin.site.urls),
    path("login/", Login.as_view(), name="login"),
    path("logout/", Logout.as_view(), name="logout"),
    re_path(r"^api/", include("apps.users.api.routers")),
<<<<<<< HEAD
    re_path(r"^api/cages/", include(cages_router.urls))

=======
    re_path(r"^api-farm/", include("apps.farms.api.routers")),
>>>>>>> 18b3bf929292fdbc98caae2b1111a84d54eaab21
]

