from django.conf.urls import url
from rest_framework_jwt.views import refresh_jwt_token
from . import views


urlpatterns = [
    url(r'^login/refresh/$', refresh_jwt_token),
    url(r'^login/$', views.CustomObtainJSONWebToken.as_view()),

]
