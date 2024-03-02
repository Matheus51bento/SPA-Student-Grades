from django.conf import settings
from rest_framework.routers import DefaultRouter
from rest_framework.routers import SimpleRouter

from students_grade.students.api.views import ThemeViewSet, GradeViewSet
from students_grade.users.api.views import UserViewSet

router = DefaultRouter() if settings.DEBUG else SimpleRouter()

# router.register("users", UserViewSet)
router.register("themes", ThemeViewSet)
router.register("grades", GradeViewSet)


app_name = "api"
urlpatterns = router.urls
