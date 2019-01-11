import datetime

from django.contrib.auth.models import Group
from django.db.models import Q
from django.http import Http404
from django.shortcuts import get_object_or_404
from django.utils.translation import ugettext as _
from django_filters import rest_framework as filters
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework_jwt.serializers import JSONWebTokenSerializer
from rest_framework_jwt.settings import api_settings
from rest_framework_jwt.views import JSONWebTokenAPIView
from rest_framework.filters import OrderingFilter
from rest_framework import status, generics, serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from core.filters import UserFilter
from core.models import User
from core.services import cas_api_service

from .serializers import UserSerializer, UserEditSerializer, GroupSerializer


class CustomJSONWebTokenAPIView(JSONWebTokenAPIView):

    def post(self, request, *args, **kwargs):
        data = request.data
        if data['username'] and '@' in data['username']:
            if not User.objects.filter(username=data['username']).exists():
                user = User.objects.filter(email=data['username']).first()
                if user: data['username'] = user.username
        serializer = self.get_serializer(data=data)

        if serializer.is_valid():
            user = serializer.object.get('user') or request.user
            token = serializer.object.get('token')
            userid = user.username
            user_auth = cas_api_service.authenticate_user(userid, data['password'])
            if user_auth:
                user = cas_api_service.update_user(userid)

                jwt_response_payload_handler = api_settings.JWT_RESPONSE_PAYLOAD_HANDLER
                response_token = jwt_response_payload_handler(token, user, request)
                user_serializer = UserSerializer(user).data
                user_serializer['token'] = response_token['token']

                response = Response(user_serializer)
                if api_settings.JWT_AUTH_COOKIE:
                    expiration = (datetime.datetime.utcnow() + api_settings.JWT_EXPIRATION_DELTA)
                    response.set_cookie(api_settings.JWT_AUTH_COOKIE, token, expires=expiration, httponly=True)
                return response

            return Response({'error': 'CAS autentication failed'}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomObtainJSONWebToken(CustomJSONWebTokenAPIView):
    """
    API View that receives a POST with a user's username and password.
    Returns a JSON Web Token that can be used for authenticated requests.
    """
    serializer_class = JSONWebTokenSerializer


class CreateUserViewSet(APIView):
    authentication_classes = (JSONWebTokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        _errors = {}
        for a in ['username', 'email']:
            if not a in request.GET.keys():
                _errors[a] = [_('This field is required.')]
        if _errors:
            raise serializers.ValidationError(_errors)

        _request = dict(request.GET)

        # Validate local users
        created_user = User.objects.filter(Q(username=_request['username']) | Q(email=_request['email'])).first()
        if created_user:
            raise serializers.ValidationError({'error': _('This user already exists and cannot be created')})

        # Search in SSO for existing users
        found_user = cas_api_service.validate_new_user(username=_request['username'],
                                                       email=_request['email'])[1]

        if found_user:
            return Response(found_user[0], status=status.HTTP_200_OK)

        return Response({}, status=status.HTTP_200_OK)

    def post(self, request):
        _errors = {}
        for a in ['username', 'email', 'first_name', 'last_name', 'group_id']:
            if not a in request.data.keys():
                _errors[a] = [_('This field is required.')]
        if _errors:
            raise serializers.ValidationError(_errors)

        _request = dict(request.data)

        # Validate existing group
        try:
            group = get_object_or_404(Group, pk=_request['group_id'])
        # pylint: disable=unused-variable
        except Exception as e:
            raise serializers.ValidationError({'error': _('Invalid group')})

        # Validate local users
        created_user = User.objects.filter(Q(username=_request['username']) | Q(email=_request['email'])).first()
        if created_user:
            raise serializers.ValidationError({'error': _('This user already exists')})

        # Search in SSO for existing users
        found_user = cas_api_service.validate_new_user(username=_request['username'],
                                                       email=_request['email'])[1]

        if found_user:
            if not 'migrate' in _request.keys():
                raise serializers.ValidationError(
                    {'error': _('This user already exists in SS0, migrate field is required')})

            found_user = found_user[0]
            new_user = User(
                username=found_user['username'],
                email=found_user['email'],
                first_name=found_user['first_name'],
                last_name=found_user['last_name'],
                profile_image=found_user['profile_image'],
                cas_permissions=found_user['permissions']
            )
            new_user.save()

        else:
            success, new_user = cas_api_service.create_user(_request, _request['username']) # pylint: disable=unused-variable

        if isinstance(new_user, dict):
            new_user = User.objects.filter(username=new_user['username']).first()

        # Assign group
        new_user.groups.add(group)
        new_user.save()

        # Grant permission to the user
        cas_api_service.grant_service_permission(
            new_user.username,
            request.user.username
        )

        serializer = UserSerializer(new_user, many=False)
        return Response(serializer.data)


class GroupAPIView(APIView):
    authentication_classes = (JSONWebTokenAuthentication, )
    permission_classes = (IsAuthenticated, )

    def get(self, request, format=None):
        groups = Group.objects.filter()
        serializer = GroupSerializer(groups, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MeAPIView(APIView):
    authentication_classes = (JSONWebTokenAuthentication, )
    permission_classes = (IsAuthenticated, )

    def get(self, request, format=None):
        serializer = UserSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserList(generics.ListAPIView):
    authentication_classes = (JSONWebTokenAuthentication,)
    permission_classes = (IsAuthenticated, )
    serializer_class = UserSerializer
    filter_backends = (filters.DjangoFilterBackend, OrderingFilter)
    filter_class = UserFilter

    def get_queryset(self):
        queryset = User.objects.filter()
        return queryset


class UserAPI(APIView):
    authentication_classes = (JSONWebTokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def get(self, request, id=None):
        view = UserList.as_view()
        return view(request._request)


class ExistingUserAPI(APIView):
    authentication_classes = (JSONWebTokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk, request):
        try:
            return User.objects.get(pk=pk, is_active=True)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk=None, format=None):
        instance = self.get_object(pk, request)
        serializer = UserSerializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk=None, format=None):
        instance = self.get_object(pk, request)
        serializer = UserEditSerializer(instance=instance, data=request.data, context={'profile': request.user})

        if serializer.is_valid():
            user = serializer.save()
            serializer = UserSerializer(user)

            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        if pk:
            instance = self.get_object(pk, request)
            instance.is_active = False
            instance.save()
            return Response(status=status.HTTP_200_OK)
        return Response({'error': _('Id is missing')}, status=status.HTTP_400_BAD_REQUEST)
