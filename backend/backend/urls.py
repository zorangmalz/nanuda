"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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
from django.urls import path,include, re_path
from nanuda.views import GoogleLogin, KakaoLogin,test

#API 제작
from rest_framework.urlpatterns import format_suffix_patterns
from nanuda.views import KakaoLogin, GoogleLogin
from data.views import user_list, service_review_all, product_all, review_all, order_all

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
    path('user/', user_list),
    path('servicereview/', service_review_all),
    path('product/', product_all),
    path('review/', review_all),
    path('order/', order_all),
    path('rest-auth/kakao/', KakaoLogin.as_view(), name='kakao_login'),
    path('test/', test.as_view(), name='test'),
]

urlpatterns = format_suffix_patterns(urlpatterns)