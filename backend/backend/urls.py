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
from nanuda.views import GoogleLogin, KakaoLogin,userInfoName,uploadAddress,checkAddress,serviceReviewOrNOt,orderUpload,niceMain

#API 제작
from rest_framework.urlpatterns import format_suffix_patterns
from nanuda.views import KakaoLogin, GoogleLogin
from data.views import user_list, service_review_all, product_all, review_all, order_all, review_one, review_home, service_review_home, user_one

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', user_list),
    path('userinfo/', user_one),
    path('servicereview/', service_review_all),
    path('servicereview/home', service_review_home),
    path('product/', product_all),
    path('review/', review_all),
    path('review/<int:pk>', review_one),
    path('review/home', review_home),
    path('order/', order_all),
    path('rest-auth/kakao/', KakaoLogin.as_view(), name='kakao_login'),
    path('userInfoName/', userInfoName.as_view(), name='test'),
    path('uploadAddress/', uploadAddress.as_view(), name='address'),
    path('checkAddress/', checkAddress.as_view(), name='address'),
    path('servicereviewornot/', serviceReviewOrNOt.as_view(), name='service'),
    path('orderupload/', orderUpload.as_view(), name='orderupload'),
    path('niceMain/', orderUpload.as_view(), name='niceMain'),
]

urlpatterns = format_suffix_patterns(urlpatterns)