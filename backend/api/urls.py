from django.urls import path
from . import views
 
urlpatterns = [
    path('hello/', views.hello_world, name='hello_world'),
    path('test-login/', views.test_login, name='test_login'),
    path('check-users/', views.check_users, name='check_users'),
    path('reset-superuser-password/', views.reset_superuser_password, name='reset_superuser_password'),
]