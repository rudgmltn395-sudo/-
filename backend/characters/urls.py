from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CharacterViewSet, EpisodeViewSet, QuoteViewSet

router = DefaultRouter()
router.register(r'characters', CharacterViewSet)
router.register(r'episodes', EpisodeViewSet)
router.register(r'quotes', QuoteViewSet)

urlpatterns = [
    path('', include(router.urls)),
] 