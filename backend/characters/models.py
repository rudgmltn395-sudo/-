from django.db import models

# Create your models here.

class Character(models.Model):
    PERSONALITY_CHOICES = [
        ('장난꾸러기', '장난꾸러기'),
        ('활발함', '활발함'),
        ('먹보', '먹보'),
        ('귀여움', '귀여움'),
        ('예쁨', '예쁨'),
        ('사교적', '사교적'),
        ('똑똑함', '똑똑함'),
        ('착함', '착함'),
        ('성숙함', '성숙함'),
        ('보호자', '보호자'),
        ('겁많음', '겁많음'),
        ('친구사랑', '친구사랑'),
        ('소심함', '소심함'),
        ('조용함', '조용함'),
        ('신중함', '신중함'),
        ('믿음직함', '믿음직함'),
    ]

    name = models.CharField('이름', max_length=100)
    japanese_name = models.CharField('일본어 이름', max_length=100)
    age = models.CharField('나이', max_length=20)
    description = models.TextField('설명')
    personality = models.JSONField('성격', default=list)
    color = models.CharField('대표 색상', max_length=20)
    emoji = models.CharField('이모지', max_length=10)
    image = models.ImageField('이미지', upload_to='characters/', null=True, blank=True)
    created_at = models.DateTimeField('생성일', auto_now_add=True)
    updated_at = models.DateTimeField('수정일', auto_now=True)

    class Meta:
        verbose_name = '캐릭터'
        verbose_name_plural = '캐릭터들'
        ordering = ['id']

    def __str__(self):
        return self.name

class Episode(models.Model):
    title = models.CharField('제목', max_length=200)
    description = models.TextField('설명')
    characters = models.ManyToManyField(Character, related_name='episodes', verbose_name='등장 캐릭터')
    air_date = models.DateField('방영일', null=True, blank=True)
    created_at = models.DateTimeField('생성일', auto_now_add=True)
    updated_at = models.DateTimeField('수정일', auto_now=True)

    class Meta:
        verbose_name = '에피소드'
        verbose_name_plural = '에피소드들'
        ordering = ['-air_date']

    def __str__(self):
        return self.title

class Quote(models.Model):
    character = models.ForeignKey(Character, on_delete=models.CASCADE, related_name='quotes', verbose_name='캐릭터')
    content = models.TextField('대사 내용')
    episode = models.ForeignKey(Episode, on_delete=models.SET_NULL, null=True, blank=True, related_name='quotes', verbose_name='등장 에피소드')
    context = models.TextField('상황 설명', blank=True)
    created_at = models.DateTimeField('생성일', auto_now_add=True)
    updated_at = models.DateTimeField('수정일', auto_now=True)

    class Meta:
        verbose_name = '명대사'
        verbose_name_plural = '명대사들'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.character.name}: {self.content[:30]}..."
