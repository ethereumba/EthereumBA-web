from django.db import models as django_models

from django_filters import rest_framework as filters
from django_filters import DateFilter, IsoDateTimeFilter

from events.models import Event


class EventFilter(filters.FilterSet):

    class Meta:
        model = Event
        fields = {
            'title_es': ['exact', 'icontains'],
            'title_en': ['exact', 'icontains'],
            'title_pt': ['exact', 'icontains'],
            'description_es': ['exact', 'icontains'],
            'description_en': ['exact', 'icontains'],
            'description_pt': ['exact', 'icontains'],
            'meetup_url': ['exact', 'icontains'],
            'date': ['gte', 'lte'],
            'place_name': ['exact', 'icontains'],
            'place_street': ['exact', 'icontains'],
            'place_number': ['exact', 'icontains'],
            'place_city': ['exact', 'icontains'],
            'is_active': ['exact',],
        }

    filter_overrides = {
        django_models.DateTimeField: {
            'filter_class': IsoDateTimeFilter
        },
    }
