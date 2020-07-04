from django.core.management.base import BaseCommand

from events.services import MeetUpService


class Command(BaseCommand):
    help = "Fetch & Update MeetUp data"

    def handle(self, *args, **options):
        service = MeetUpService()
        service.update_group_data()
