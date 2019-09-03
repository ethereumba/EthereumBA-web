from django.utils.translation import ugettext as _
from rest_framework import serializers

from events.models import Sponsor, Event, EventPhoto, Talk, TalkMaterial


class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = ('id', 'name', 'logo', 'is_active')


class EventPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventPhoto
        fields = ('id', 'name', 'img', 'is_active')


class TalkMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = TalkMaterial
        fields = ('id', 'name', 'file', 'is_active')


class TalkSerializer(serializers.ModelSerializer):
    material = serializers.SerializerMethodField('get_material_')
    language_display = serializers.ReadOnlyField(source='get_language_display')
    level_display = serializers.ReadOnlyField(source='get_level_display')

    class Meta:
        model = Talk
        fields = (
            'id', 'name', 'speaker', 'time', 'language', 'language_display', 'level', 'level_display', 'material',
            'is_active'
        )

    def get_material_(self, st):
        talk_materials = TalkMaterial.objects.filter(talk=st, is_active=True)
        return TalkMaterialSerializer(talk_materials, many=True).data


class EventSerializer(serializers.ModelSerializer):
    photos = serializers.SerializerMethodField('get_photos_')
    talks = serializers.SerializerMethodField('get_talks_')
    sponsors = SponsorSerializer(read_only=True, many=True)

    class Meta:
        model = Event
        fields = (
            'id', 'title', 'description', 'meetup_url', 'date', 'place_name', 'place_street', 'place_number',
            'place_city', 'place_map_url', 'sponsors', 'talks', 'photos', 'is_active'
        )

    def get_photos_(self, st):
        photos = EventPhoto.objects.filter(event=st, is_active=True)
        return EventPhotoSerializer(photos, many=True).data

    def get_talks_(self, st):
        talks = Talk.objects.filter(event=st, is_active=True)
        return TalkSerializer(talks, many=True).data


class ShortEventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = (
            'id', 'title', 'description', 'meetup_url', 'date', 'place_name', 'place_street', 'place_number',
            'place_city', 'place_map_url',
        )
