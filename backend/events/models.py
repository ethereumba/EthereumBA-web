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

    def __str__(self):
        if self.name:
            return self.name
        else:
            return super(Sponsor).__str__()


class Event(TimeStampedModel):
    class Meta:
        verbose_name = _('event')

    title_es = models.CharField(max_length=255, blank=True, null=True)
    title_en = models.CharField(max_length=255, blank=True, null=True)
    title_pt = models.CharField(max_length=255, blank=True, null=True)
    description_es = models.TextField(blank=True, null=True)
    description_en = models.TextField(blank=True, null=True)
    description_pt = models.TextField(blank=True, null=True)
    meetup_url = models.CharField(max_length=255, blank=True, null=True)
    youtube_url = models.CharField(max_length=255, blank=True, null=True)
    date = models.DateTimeField()

    place_name = models.CharField(max_length=255, blank=True, null=True)
    place_street = models.CharField(max_length=255, blank=True, null=True)
    place_number = models.CharField(max_length=255, blank=True, null=True)
    place_city = models.CharField(max_length=255, blank=True, null=True)
    place_map_url = models.CharField(max_length=255, blank=True, null=True)

    is_active = models.BooleanField(default=True)

    def __str__(self):
        if self.title_es:
            return self.title_es
        else:
            return super(Event).__str__()


class EventPhoto(TimeStampedModel):
    class Meta:
        verbose_name = _('event photo')

    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True, null=True)
    img = models.FileField()

    is_active = models.BooleanField(default=True)

    def __str__(self):
        if self.name:
            return self.name
        else:
            return super(EventPhoto).__str__()


class Talk(TimeStampedModel):
    class Meta:
        verbose_name = _('talk')
        ordering = ['-event']

    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    name_es = models.CharField(max_length=255, blank=True, null=True)
    name_en = models.CharField(max_length=255, blank=True, null=True)
    name_pt = models.CharField(max_length=255, blank=True, null=True)
    speaker = models.CharField(max_length=255, blank=True, null=True)
    time = models.TimeField()
    language = models.CharField(max_length=255, choices=LANGUAGE.items, blank=True, null=True)
    level = models.CharField(max_length=255, choices=LEVEL.items, blank=True, null=True)

    description_es = models.TextField(max_length=255, blank=True, null=True)
    description_en = models.TextField(max_length=255, blank=True, null=True)
    description_pt = models.TextField(max_length=255, blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        if self.name_es:
            return '{} - {}'.format(self.event.title_es, self.name_es)
        else:
            return super(Talk).__str__()


class TalkMaterial(TimeStampedModel):
    class Meta:
        verbose_name = _('talk material')

    talk = models.ForeignKey(Talk, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True, null=True)
    file = models.FileField()

    is_active = models.BooleanField(default=True)

    def __str__(self):
        if self.name:
            return self.name
        else:
            return super(TalkMaterial).__str__()
