from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "안녕하세요! Django API가 정상적으로 작동중입니다."})

@api_view(['POST'])
@csrf_exempt
def test_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    if not username or not password:
        return Response({
            "error": "사용자명과 비밀번호를 입력해주세요."
        }, status=status.HTTP_400_BAD_REQUEST)
    
    # 사용자 존재 여부 및 상태 확인
    try:
        user_obj = User.objects.filter(username=username).first()
        if user_obj:
            user_info = {
                "username": user_obj.username,
                "is_active": user_obj.is_active,
                "is_staff": user_obj.is_staff,
                "is_superuser": user_obj.is_superuser,
                "last_login": str(user_obj.last_login) if user_obj.last_login else None,
                "date_joined": str(user_obj.date_joined)
            }
        else:
            user_info = None
    except Exception as e:
        return Response({
            "error": f"사용자 조회 중 오류 발생: {str(e)}"
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    user = authenticate(username=username, password=password)
    
    if user is not None:
        return Response({
            "message": "로그인 성공!",
            "username": user.username,
            "is_staff": user.is_staff,
            "is_superuser": user.is_superuser,
            "is_active": user.is_active
        })
    else:
        # 로그인 실패 시 상세 정보 제공
        return Response({
            "error": "로그인 실패",
            "user_exists": user_info is not None,
            "user_info": user_info,
            "message": "사용자명 또는 비밀번호가 올바르지 않습니다.",
            "debug_info": {
                "provided_username": username,
                "password_provided": bool(password),
                "password_length": len(password) if password else 0
            }
        }, status=status.HTTP_401_UNAUTHORIZED)

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

@api_view(['POST'])
@csrf_exempt
def reset_superuser_password(request):
    """
    슈퍼유저 비밀번호 재설정 (개발/디버깅용)
    """
    username = request.data.get('username')
    new_password = request.data.get('new_password')
    
    if not username or not new_password:
        return Response({
            "error": "사용자명과 새 비밀번호를 입력해주세요."
        }, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        user = User.objects.get(username=username)
        
        if not user.is_superuser:
            return Response({
                "error": "슈퍼유저가 아닙니다."
            }, status=status.HTTP_403_FORBIDDEN)
        
        # 비밀번호 재설정
        user.set_password(new_password)
        user.save()
        
        return Response({
            "message": f"슈퍼유저 '{username}'의 비밀번호가 성공적으로 재설정되었습니다.",
            "username": user.username,
            "is_active": user.is_active,
            "is_superuser": user.is_superuser
        })
        
    except User.DoesNotExist:
        return Response({
            "error": "해당 사용자를 찾을 수 없습니다."
        }, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({
            "error": f"비밀번호 재설정 중 오류 발생: {str(e)}"
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
