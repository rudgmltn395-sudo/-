"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def root_view(request):
    return JsonResponse({
        "message": "짱구는 못말려 캐릭터 소개 API 서버",
        "version": "1.0.0",
        "available_endpoints": {
            "api/hello/": "기본 테스트 엔드포인트",
            "api/test-login/": "로그인 테스트",
            "api/check-users/": "사용자 목록 조회",
            "api/reset-superuser-password/": "슈퍼유저 비밀번호 재설정",
            "admin/": "Django 관리자 페이지"
        }
    })

urlpatterns = [
    path('', root_view, name='root'),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
