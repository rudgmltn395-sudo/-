from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Character, Episode, Quote
from .serializers import (
    CharacterSerializer,
    CharacterDetailSerializer,
    EpisodeSerializer,
    QuoteSerializer
)

class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['personality', 'age']
    search_fields = ['name', 'japanese_name', 'description']

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CharacterDetailSerializer
        return CharacterSerializer

    @action(detail=True, methods=['get'])
    def quotes(self, request, pk=None):
        character = self.get_object()
        quotes = character.quotes.all()
        serializer = QuoteSerializer(quotes, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def episodes(self, request, pk=None):
        character = self.get_object()
        episodes = character.episodes.all()
        serializer = EpisodeSerializer(episodes, many=True)
        return Response(serializer.data)

class EpisodeViewSet(viewsets.ModelViewSet):
    queryset = Episode.objects.all()
    serializer_class = EpisodeSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['characters', 'air_date']
    search_fields = ['title', 'description']

    @action(detail=True, methods=['get'])
    def quotes(self, request, pk=None):
        episode = self.get_object()
        quotes = episode.quotes.all()
        serializer = QuoteSerializer(quotes, many=True)
        return Response(serializer.data)

class QuoteViewSet(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['character', 'episode']
    search_fields = ['content', 'context']
