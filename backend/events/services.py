import requests
from .models import MeetupData


class MeetUpService:
    MEETUP_API_URL = "https://api.meetup.com/"

    @staticmethod
    def make_request(method, url, querystring={}, data={}):
        headers = {
            'accept': 'application/json',
            'content-type': "application/json",
        }

        try:
            response = requests.request(method, url, headers=headers, params=querystring, json=data)

            if response.status_code in [401, 403]:
                return {'success': False, 'response': 'Unauthorized/Forbidden'}

            if response.status_code in [404]:
                return {'success': False, 'response': 'Not Found'}

            if response.status_code in [204]:
                return {'success': True, 'response': 'No Content'}

            response_json = response.json()

            if not response.status_code in [200, 201, 202, 203, 204]:
                return {'success': False, 'response': response_json}

        except Exception as e:
            return {'success': False, 'response': str(e)}

        return {'success': True, 'response': response_json}

    def get_group_data(self):
        url = f'{self.MEETUP_API_URL}/EthereumBA'
        return self.make_request('GET', url)

    def update_group_data(self):
        config = MeetupData.get_solo()

        data = self.get_group_data()
        if data['success'] and 'members' in data['response']:
            total_members = data['response']['members']
            total_members = int(total_members/10) * 10
            config.amount_of_members = total_members
            config.save()
