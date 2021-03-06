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
from django.urls import path
from nanuda.views import KakaoLogin, userInfoName, uploadAddress, checkAddress, serviceReviewOrNOt, orderUpload, niceMain,logout,bankUpload,bankCheck,niceSearch,bankDelete,refundProduct,appleLogin,niceCheck

#API 제작
from rest_framework.urlpatterns import format_suffix_patterns
from nanuda.views import KakaoLogin
from data.views import address_all, mission_all, order_one, point_list, review_profile, user_list, service_review_all, product_all, review_all, order_all, review_one, review_home, service_review_home, user_one, order_list

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', user_list),
    path('userinfo/', user_one),
    path('userpoint', point_list),
    path('user/mission', mission_all),
    path('servicereview/main', service_review_all),
    path('servicereview/home', service_review_home),
    path('product/', product_all),
    path('review/main', review_all),
    path('review/<int:pk>', review_one),
    path('review/home', review_home),
    path('review/profile/<int:pk>', review_profile),
    path('order/', order_all),
    path('order/profile', order_list),
    path('order/detail', order_one),
    path('order/address', address_all),
    path('rest-auth/kakao/', KakaoLogin.as_view(), name='kakao_login'),
    path('userInfoName/', userInfoName.as_view(), name='test'),
    path('uploadAddress/', uploadAddress.as_view(), name='address'),
    path('checkAddress/', checkAddress.as_view(), name='address'),
    path('servicereviewornot/', serviceReviewOrNOt.as_view(), name='service'),
    path('orderupload/', orderUpload.as_view(), name='orderupload'),
    path('niceMain/', niceMain.as_view(), name='niceMain'),
    path('logout/', logout.as_view(), name='logout'),
    path('bankUpload/', bankUpload.as_view(), name='bankUpload'),
    path('bankCheck/', bankCheck.as_view(), name='bankCheck'),
    path('niceSearch/', niceSearch.as_view(), name='niceSearch'),
    path('bankDelete/', bankDelete.as_view(), name='bankDelete'),
    path('refundProduct/', refundProduct.as_view(), name='refundProduct'),
    path('appleLogin/', appleLogin.as_view(), name='appleLogin'),
    path('niceCheck/', niceCheck.as_view(), name='niceCheck'),
    
]

urlpatterns = format_suffix_patterns(urlpatterns)
