from django.urls import path
from . import views
from django.contrib.auth import views as view

urlpatterns = [
    path('', views.main, name='main'),
    path('login/', view.LoginView.as_view(), name='login'),
    path('register/', views.register, name='register'),
    path('logout/', views.logout_view, name='logout'),
]