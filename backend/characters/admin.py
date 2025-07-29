from django.contrib import admin
from .models import Character, Episode, Quote

@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    list_display = ('name', 'japanese_name', 'age', 'color')
    list_filter = ('personality',)
    search_fields = ('name', 'japanese_name', 'description')

@admin.register(Episode)
class EpisodeAdmin(admin.ModelAdmin):
    list_display = ('title', 'air_date')
    list_filter = ('air_date', 'characters')
    search_fields = ('title', 'description')
    filter_horizontal = ('characters',)

@admin.register(Quote)
class QuoteAdmin(admin.ModelAdmin):
    list_display = ('character', 'content_preview', 'episode')
    list_filter = ('character', 'episode')
    search_fields = ('content', 'context')
    raw_id_fields = ('character', 'episode')

    def content_preview(self, obj):
        return obj.content[:50] + '...' if len(obj.content) > 50 else obj.content
    content_preview.short_description = '대사 내용'
