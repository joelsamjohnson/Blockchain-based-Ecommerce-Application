from django.contrib.auth.backends import ModelBackend
from .models import Manufacturer, Consumer, Retailer, Distributor

class MultiModelAuthBackend(ModelBackend):
    def authenticate(self, request, name=None, password=None, **kwargs):
        for model in (Manufacturer, Consumer, Retailer, Distributor):
            try:
                user = model.objects.get(name=name)
                if user.check_password(password):
                    return user
            except model.DoesNotExist:
                continue
        return None

    def get_user(self, user_id):
        for model in (Manufacturer, Consumer, Retailer, Distributor):
            try:
                return model.objects.get(pk=user_id)
            except model.DoesNotExist:
                continue
        return None
