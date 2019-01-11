from django.conf.urls import url
from rest_framework_jwt.views import refresh_jwt_token
from . import views


urlpatterns = [
    url(r'^login/refresh/$', refresh_jwt_token),
    url(r'^login/$', views.CustomObtainJSONWebToken.as_view()),

    url(r'^groups/$', views.GroupAPIView.as_view()),

    url(r'^me/$', views.MeAPIView.as_view()),
    url(r'^users/$', views.UserAPI.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$', views.ExistingUserAPI.as_view()),

    # User management
    url(r'^validate_user/$', views.CreateUserViewSet.as_view()),
    url(r'^create_user/$', views.CreateUserViewSet.as_view()),

]
