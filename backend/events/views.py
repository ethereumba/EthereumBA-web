from django_filters import rest_framework as filters
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.filters import OrderingFilter

from events.filters import EventFilter
from events.models import Event
from events.serializers import ShortEventSerializer, EventSerializer


class CalendarViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    http_method_names = ['get', ]
    queryset = Event.objects.filter()
    serializer_class = ShortEventSerializer
    filter_backends = (filters.DjangoFilterBackend, OrderingFilter)
    filter_class = EventFilter


class EventViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    http_method_names = ['get', ]
    queryset = Event.objects.filter()
    serializer_class = EventSerializer
    filter_backends = (filters.DjangoFilterBackend, OrderingFilter)
    filter_class = EventFilter
