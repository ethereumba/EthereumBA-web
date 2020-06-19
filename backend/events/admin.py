from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from events.models import Sponsor, Event, EventPhoto, Talk, TalkMaterial


@admin.register(Sponsor)
class SponsorAdmin(ImportExportModelAdmin):
    list_display = (
        'id', 'name', 'is_active'
    )


@admin.register(Event)
class EventAdmin(ImportExportModelAdmin):
    change_list_template = 'admin/eth-buenos-aires/events/change_list.html'
    list_display = (
        'title_es', 'meetup_url', 'date', 'place_name', 'place_street', 'place_number', 'place_city', 'is_active'
    )


@admin.register(EventPhoto)
class EventPhotoAdmin(ImportExportModelAdmin):
    list_display = (
        'id', 'event', 'name', 'is_active'
    )


@admin.register(Talk)
class TalkAdmin(ImportExportModelAdmin):
    list_display = (
        'id', 'event', 'name_es', 'speaker', 'time', 'language', 'level', 'is_active'
    )


@admin.register(TalkMaterial)
class TalkAdmin(ImportExportModelAdmin):
    list_display = (
        'id', 'talk', 'name', 'is_active'
    )
