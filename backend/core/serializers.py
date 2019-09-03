from django.contrib.auth.models import Group
from django.utils.translation import ugettext as _
from rest_framework import serializers

from core.models import User



class ShortUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name')


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name', )


class UserSerializer(serializers.ModelSerializer):
    groups = GroupSerializer(many=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'profile_image', 'groups', 'is_active')


class UserEditSerializer(serializers.ModelSerializer):
    group_id = serializers.IntegerField(required=True)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'group_id')

    def update(self, instance, validated_data):
        group_id = validated_data.get('group_id', None)
        validated_data.pop('group_id')

        # Remove all groups and add the group sended
        instance.groups.clear()
        group = Group.objects.get(id=group_id)
        group.user_set.add(instance)

        return instance

    def validate(self, validated_data):
        group_id = validated_data.get('group_id', None)

        if not group_id:
            raise serializers.ValidationError(_('field "group_id" is required'))

        group = Group.objects.filter(pk=group_id)
        if not group.exists():
            raise serializers.ValidationError(_('group does not exist'))

        return validated_data
