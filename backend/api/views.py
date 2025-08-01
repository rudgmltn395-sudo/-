from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import status

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "안녕하세요! Django API가 정상적으로 작동중입니다."})

@api_view(['POST'])
def test_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    if not username or not password:
        return Response({
            "error": "사용자명과 비밀번호를 입력해주세요."
        }, status=status.HTTP_400_BAD_REQUEST)
    
    user = authenticate(username=username, password=password)
    
    if user is not None:
        return Response({
            "message": "로그인 성공!",
            "username": user.username,
            "is_staff": user.is_staff,
            "is_superuser": user.is_superuser
        })
    else:
        # 사용자 존재 여부 확인
        try:
            user_exists = User.objects.filter(username=username).exists()
            return Response({
                "error": "로그인 실패",
                "user_exists": user_exists,
                "message": "사용자명 또는 비밀번호가 올바르지 않습니다."
            }, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({
                "error": f"오류 발생: {str(e)}"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def check_users(request):
    users = User.objects.all()
    user_list = []
    for user in users:
        user_list.append({
            "username": user.username,
            "is_staff": user.is_staff,
            "is_superuser": user.is_superuser,
            "is_active": user.is_active
        })
    return Response({
        "users": user_list,
        "total_users": len(user_list)
    })
