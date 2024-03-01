import contextlib

from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "students_grade.users"
    verbose_name = _("Users")

    def ready(self):
        with contextlib.suppress(ImportError):
            import students_grade.users.signals  # noqa: F401
