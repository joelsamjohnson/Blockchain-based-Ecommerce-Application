from django.contrib.auth.backends import ModelBackend
from .models import Manufacturer


class EmailAuthBackend(ModelBackend):
    def authenticate(self, request, name=None):
        try:
            user = Manufacturer.objects.get(name=name)
            if user.check_password(password):
                return user
        except Manufacturer.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return Manufacturer.objects.get(pk=user_id)
        except Manufacturer.DoesNotExist:
            return None
