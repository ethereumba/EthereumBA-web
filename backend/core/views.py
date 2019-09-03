import datetime

from rest_framework import status
from rest_framework_jwt.serializers import JSONWebTokenSerializer
from rest_framework_jwt.settings import api_settings
from rest_framework_jwt.views import JSONWebTokenAPIView
from rest_framework.response import Response


from core.models import User

from .serializers import UserSerializer


class CustomJSONWebTokenAPIView(JSONWebTokenAPIView):

    def post(self, request, *args, **kwargs):
        data = request.data
        username = data.get('username', None)
        if username and '@' in username:
            if not User.objects.filter(username=username).exists():
                user = User.objects.filter(email=username).first()
                if user: data['username'] = user.username
        serializer = self.get_serializer(data=data)

        if serializer.is_valid():
            user = serializer.object.get('user') or request.user
            token = serializer.object.get('token')

            jwt_response_payload_handler = api_settings.JWT_RESPONSE_PAYLOAD_HANDLER
            response_token = jwt_response_payload_handler(token, user, request)
            user_serializer = UserSerializer(user).data
            user_serializer['token'] = response_token['token']

            response = Response(user_serializer)
            if api_settings.JWT_AUTH_COOKIE:
                expiration = (datetime.datetime.utcnow() + api_settings.JWT_EXPIRATION_DELTA)
                response.set_cookie(api_settings.JWT_AUTH_COOKIE, token, expires=expiration, httponly=True)
            return response

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomObtainJSONWebToken(CustomJSONWebTokenAPIView):
    """
    API View that receives a POST with a user's username and password.
    Returns a JSON Web Token that can be used for authenticated requests.
    """
    serializer_class = JSONWebTokenSerializer
