from django.db import models as django_models

from django_filters import rest_framework as filters
from django_filters import DateFilter, IsoDateTimeFilter

from events.models import Event


class EventFilter(filters.FilterSet):

    class Meta:
        model = Event
        fields = {
            'title': ['exact', 'icontains'],
            'description': ['exact', 'icontains'],
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
