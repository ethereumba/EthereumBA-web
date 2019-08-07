from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register(r'events', views.EventViewSet, base_name='events')
router.register(r'calendar', views.CalendarViewSet, base_name='calendar')

urlpatterns = router.urls
