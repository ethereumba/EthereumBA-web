import os
import requests

from django.conf import settings

from .models import User


class CASAPIService:
    base_url = settings.CAS_SERVER_URL.replace('login', '')

    def authenticate_user(self, user, password):
        URL = os.path.join(self.base_url, 'api/v1/authenticate')
        r = requests.post(
            URL,
            data={'API_KEY': settings.CAS_API_KEY},
            auth=(user, password)
        )

        if r.status_code != 200:
            print('CAS error:' + str(r.status_code))
            return False
        return True

    def validate_new_user(self, username, email=None):
        URL = os.path.join(self.base_url, 'api/v1/user-validation/')
        r = requests.get(
            URL,
            params={'username': username, 'email': email},
            headers={'AUTHORIZATION': settings.CAS_API_KEY}
        )

        if r.status_code != 200:
            print('CAS error:' + str(r.status_code))
            return False, {}
        return True, r.json()

    def fetch_user_data(self, username, email=None):
        URL = os.path.join(self.base_url, 'api/v1/user')
        r = requests.get(
            URL,
            params={'username': username, 'email': email},
            headers={'AUTHORIZATION': settings.CAS_API_KEY}
        )

        if r.status_code != 200:
            print('CAS error:' + str(r.status_code))
            return False, {}
        return True, r.json()

    def create_user(self, user, password):
        URL = os.path.join(self.base_url, 'api/v1/user')
        r = requests.post(
            URL,
            data={
                'username': user['username'],
                'email': user['email'],
                'first_name': user['first_name'],
                'last_name': user['last_name'],
                'password': password
            },
            headers={'AUTHORIZATION': settings.CAS_API_KEY}
        )

        if r.status_code != 201:
            print(r.content)
            print('CAS error: User Creation ' + str(r.status_code))
            return False

        new_user = r.json()
        user = User()
        user.username = new_user['username']
        user.first_name = new_user['first_name']
        user.last_name = new_user['last_name']
        user.email = new_user['email']
        user.is_active = new_user['is_active']
        user.profile_image = new_user['profile_full_url']
        user.cas_permissions = new_user['permissions']
        user.save()

        return True, new_user

    def grant_service_permission(self, username, requested_by):
        URL = os.path.join(
            self.base_url, 'api/v1/user-permission',
            username, 'service',
            settings.CAS_API_KEY, 'requested-by', requested_by) + '/'
        r = requests.post(URL)

        if r.status_code not in [200, 201]:
            print('CAS error: Grant Service ' + str(r.status_code))
            return False
        return True

    def deactivate_permission(self, username, requested_by):
        URL = os.path.join(
            self.base_url, 'api/v1/user-permission',
            username, 'service', settings.CAS_API_KEY,
            'requested-by', requested_by) + '/'
        r = requests.delete(URL)

        if r.status_code not in [200, 201]:
            print('CAS error: Grant Service ' + str(r.status_code))
            return False
        return True

    def post_update(self, username, dictionary):
        headers = {'Authorization': settings.CAS_API_KEY}
        url = os.path.join(
            self.base_url, 'api/v1/user/{}/'.format(username))
        r = requests.put(url, headers=headers, data=dictionary)

        if r.status_code not in [200, 201]:
            print('CAS error: Update error ' + str(r.status_code))
            return False
        return True

    def change_password(self, username, password, new_password):
        URL = os.path.join(self.base_url, 'api/v1/password/change/')
        r = requests.post(
            URL,
            auth=(username, password),
            data={
                'old_password': password,
                'new_password1': new_password,
                'new_password2': new_password,
            },
            headers={'AUTHORIZATION': settings.CAS_API_KEY}
        )

        if r.status_code not in [200, 201]:
            print(r.content)
            print('CAS error: Password Change ' + str(r.status_code))
            return False
        return True

    def request_password_reset(self, email):
        URL = os.path.join(self.base_url, 'api/v1/password/reset/')
        r = requests.post(
            URL,
            data={
                'email': email
            },
            headers={'AUTHORIZATION': settings.CAS_API_KEY}
        )
        if r.status_code not in [200, 201]:
            print('CAS error: Manager Reset ' + str(r.status_code))
            return False
        return True

    def update_user_image(self, username, image):
        headers = {'Authorization': settings.CAS_API_KEY}
        url = os.path.join(self.base_url, 'api/v1/user/{}/'.format(username))
        files = {'profile_image': image}
        requests.put(url, headers=headers, files=files)
        self.update_user(username)

    def update_user(self, username):
        headers = {'Authorization': settings.CAS_API_KEY}
        url = os.path.join(self.base_url, 'api/v1/user/{}/'.format(username))
        r = requests.get(url, headers=headers)
        if r.status_code == 200:
            data = r.json()
            # pylint: disable=unused-variable
            user, created = User.objects.get_or_create(
                username=username
            )
            user.first_name = data['first_name']
            user.last_name = data['last_name']
            user.email = data['email']
            user.is_active = data['is_active']
            user.profile_image = data['profile_full_url']
            user.cas_permissions = data['permissions']
            user.save()

            return user
        return None

    def create_token_view(self, username, target):
        headers = {'Authorization': settings.CAS_API_KEY}
        url = os.path.join(
            self.base_url, 'api/v1/webviews/{}/{}/'.format(username, target))
        r = requests.get(url, headers=headers)
        if r.status_code == 200:
            data = r.json()
            return data['redirect_page']
        return self.base_url


cas_api_service = CASAPIService()
