from rest_framework import serializers
from .models import Character, Episode, Quote

class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = '__all__'

class EpisodeSerializer(serializers.ModelSerializer):
    characters = CharacterSerializer(many=True, read_only=True)

    class Meta:
        model = Episode
        fields = '__all__'

class QuoteSerializer(serializers.ModelSerializer):
    character = CharacterSerializer(read_only=True)
    episode = EpisodeSerializer(read_only=True)

    class Meta:
        model = Quote
        fields = '__all__'

class CharacterDetailSerializer(serializers.ModelSerializer):
    episodes = EpisodeSerializer(many=True, read_only=True)
    quotes = QuoteSerializer(many=True, read_only=True)

    class Meta:
        model = Character
        fields = '__all__' 