from django.db import models
from django.contrib.auth.models import AbstractUser

class TimeStampedModel(models.Model):
    """
    An abstract base class model that provides self-updating
    ``created`` and ``modified`` fields.
    """
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class User(AbstractUser):
    profile_image = models.URLField(
        max_length=200, null=True, blank=True, default=None)
    cas_permissions = models.TextField(blank=True, null=True)

    def get_tools(self):
        if self.cas_permissions:
            return eval(self.cas_permissions)
        return []
