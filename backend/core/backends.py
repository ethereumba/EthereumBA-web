"""CAS authentication backend"""
from __future__ import absolute_import
from __future__ import unicode_literals

from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.conf import settings

from django_cas_ng.signals import cas_user_authenticated
from django_cas_ng.utils import get_cas_client

__all__ = ['CASBackend']


class CustomCASBackend(ModelBackend):
    """CAS authentication backend"""

    def authenticate(self, request, ticket, service):
        """Verifies CAS ticket and gets or creates User object"""
        client = get_cas_client(service_url=service)
        username, attributes, pgtiou = client.verify_ticket(ticket)
        if attributes and request:
            request.session['attributes'] = attributes
            # Attributes
            # {
            #     'username': String
            #     'first_name': String
            #     'last_name': String
            #     'email': String
            #     'is_active': Bool
            #     'station_code': Int or None
            #     'profile_image': String or None
            #     'permissions': String
            # }
            print(attributes)

        if not username:
            return None

        user = None

        UserModel = get_user_model()
        user, created = UserModel._default_manager.get_or_create(**{
            UserModel.USERNAME_FIELD: username
        })

        if created:
            # If devs want to do something with new user
            pass

        if attributes:
            user.username = attributes['username']
            user.first_name = attributes['first_name']
            user.last_name = attributes['last_name']
            user.email = attributes['email']
            user.is_active = attributes['is_active']
            user.cas_permissions = attributes['permissions']
            if attributes['profile_image'] and \
               attributes['profile_image'] != 'None':
                user.profile_image = attributes['profile_image']

            user.save()

        if not self.user_can_authenticate(user):
            return None

        if pgtiou and settings.CAS_PROXY_CALLBACK and request:
            request.session['pgtiou'] = pgtiou

        # send the `cas_user_authenticated` signal
        cas_user_authenticated.send(
            sender=self,
            user=user,
            created=created,
            attributes=attributes,
            ticket=ticket,
            service=service,
            request=request
        )
        return user

    # ModelBackend has a `user_can_authenticate` method starting from Django
    # 1.10, that only allows active user to log in. For consistency,
    # django-cas-ng will have the same behavior as Django's ModelBackend.
    if not hasattr(ModelBackend, 'user_can_authenticate'):
        def user_can_authenticate(self, user):
            return True
