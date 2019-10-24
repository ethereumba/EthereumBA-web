from rest_framework.routers import DefaultRouter

from django.conf.urls import url
from . import views


router = DefaultRouter()
router.register(r'events', views.EventViewSet, base_name='events')
router.register(r'calendar', views.CalendarViewSet, base_name='calendar')

urlpatterns = router.urls
urlpatterns.append(url(r'^upload-event-photo/$', views.PhotoCreateView.as_view()))
urlpatterns.append(url(r'^import-event-photos/$', views.PhotoCreate.as_view()))
