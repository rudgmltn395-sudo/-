from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from django.db import IntegrityError
import os


class Command(BaseCommand):
    help = '자동으로 관리자 계정을 생성합니다'

    def handle(self, *args, **options):
        # 환경변수에서 관리자 정보 가져오기 (기본값 설정)
        admin_username = os.environ.get('ADMIN_USERNAME', '1q2w3e4r')
        admin_email = os.environ.get('ADMIN_EMAIL', 'admin@example.com')
        admin_password = os.environ.get('ADMIN_PASSWORD', '123456789@')

        try:
            # 기존 관리자 계정이 있는지 확인
            if User.objects.filter(username=admin_username).exists():
                self.stdout.write(
                    self.style.WARNING(f'관리자 계정 "{admin_username}"이 이미 존재합니다.')
                )
                return

            # 새로운 관리자 계정 생성
            user = User.objects.create_superuser(
                username=admin_username,
                email=admin_email,
                password=admin_password
            )

            self.stdout.write(
                self.style.SUCCESS(
                    f'관리자 계정이 성공적으로 생성되었습니다!\n'
                    f'사용자명: {admin_username}\n'
                    f'이메일: {admin_email}\n'
                    f'비밀번호: {admin_password}'
                )
            )

        except IntegrityError:
            self.stdout.write(
                self.style.ERROR('관리자 계정 생성 중 오류가 발생했습니다.')
            )
        except Exception as e:
            self.stdout.write(
                self.style.ERROR(f'예상치 못한 오류: {str(e)}')
            ) 