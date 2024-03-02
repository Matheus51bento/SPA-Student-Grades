from django.conf import settings
from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth.decorators import login_required
from django.utils.translation import gettext_lazy as _

# from .forms import UserAdminChangeForm
# from .forms import UserAdminCreationForm
from .models import Theme, Grade, Student

if settings.DJANGO_ADMIN_FORCE_ALLAUTH:
    # Force the `admin` sign in process to go through the `django-allauth` workflow:
    # https://docs.allauth.org/en/latest/common/admin.html#admin
    admin.site.login = login_required(admin.site.login)  # type: ignore[method-assign]


@admin.register(Grade)
class GradeAdmin(admin.ModelAdmin):

    list_display = ["theme", "value"]
    search_fields = ["theme"]
    ordering = ["id"]

@admin.register(Theme)
class ThemeAdmin(admin.ModelAdmin):

    list_display = ["name"]
    search_fields = ["name"]
    ordering = ["id"]


@admin.register(Student)
class ThemeAdmin(admin.ModelAdmin):

    list_display = ["name"]
    search_fields = ["name"]
    ordering = ["id"]