from datetime import datetime
from django.utils.translation import ugettext as _
from django_filters import rest_framework as filters
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import OrderingFilter
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from events.filters import EventFilter
from events.models import Event
from events.serializers import ShortEventSerializer, EventSerializer


class CalendarViewSet(viewsets.ModelViewSet):
    authentication_classes = [JSONWebTokenAuthentication]
    permission_classes = [IsAuthenticated]
    http_method_names = ['get', ]
    queryset = Event.objects.filter()
    serializer_class = ShortEventSerializer
    filter_backends = (filters.DjangoFilterBackend, OrderingFilter)
    filter_class = EventFilter


class EventViewSet(viewsets.ModelViewSet):
    authentication_classes = [JSONWebTokenAuthentication]
    permission_classes = [IsAuthenticated]
    http_method_names = ['get', ]
    queryset = Event.objects.filter()
    serializer_class = EventSerializer
    filter_backends = (filters.DjangoFilterBackend, OrderingFilter)
    filter_class = EventFilter
