from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "안녕하세요! Django API가 정상적으로 작동중입니다."})
