from django.db import models
from core.models import TimeStampedModel, User
from django.utils.translation import ugettext as _


class LEVEL:
    INITIAL = 'INITIAL'
    MEDIUM = 'MEDIUM'
    ADVANCED = 'ADVANCED'

    items = [
        (INITIAL, _('initial')),
        (MEDIUM, _('medium')),
        (ADVANCED, _('advanced')),
    ]
    values = dict(items)

class LANGUAGE:
    SPANISH = 'SPANISH'
    ENGLISH = 'ENGLISH'

    items = [
        (SPANISH, _('spanish')),
        (ENGLISH, _('english')),
    ]
    values = dict(items)


class Sponsor(TimeStampedModel):
    class Meta:
        verbose_name = _('sponsor')

    name = models.CharField(max_length=255, blank=True, null=True)
    logo = models.FileField()

    is_active = models.BooleanField(default=True)


class Event(TimeStampedModel):
    class Meta:
        verbose_name = _('event')

    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    meetup_url = models.CharField(max_length=255, blank=True, null=True)
    youtube_url = models.CharField(max_length=255, blank=True, null=True)
    date = models.DateTimeField()

    place_name = models.CharField(max_length=255, blank=True, null=True)
    place_street = models.CharField(max_length=255, blank=True, null=True)
    place_number = models.CharField(max_length=255, blank=True, null=True)
    place_city = models.CharField(max_length=255, blank=True, null=True)
    place_map_url = models.CharField(max_length=255, blank=True, null=True)

    is_active = models.BooleanField(default=True)


class EventPhoto(TimeStampedModel):
    class Meta:
        verbose_name = _('event photo')

    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True, null=True)
    img = models.FileField()

    is_active = models.BooleanField(default=True)


class Talk(TimeStampedModel):
    class Meta:
        verbose_name = _('talk')

    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True, null=True)
    speaker = models.CharField(max_length=255, blank=True, null=True)
    time = models.TimeField()
    language = models.CharField(max_length=255, choices=LANGUAGE.items, blank=True, null=True)
    level = models.CharField(max_length=255, choices=LEVEL.items, blank=True, null=True)

    description = models.TextField(max_length=255, blank=True, null=True)
    is_active = models.BooleanField(default=True)


class TalkMaterial(TimeStampedModel):
    class Meta:
        verbose_name = _('talk material')

    talk = models.ForeignKey(Talk, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True, null=True)
    file = models.FileField()

    is_active = models.BooleanField(default=True)
