from django.shortcuts import render, redirect
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from django.views.generic import View
from django.http import HttpResponse
import requests
import json


# API 제작 
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from nanuda.models import User, ServiceReview, Product, Review, Order
from nanuda.serializers import UserAllSerializer, ServicReviewAllSerializer, ProductAllSerializer, ReviewAllSerializer, OrderAllSerializer

# Create your views here.
# FacebookLogin
class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

# GoogleLogin
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter


# User Information
@api_view(["GET", "POST"])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def user_list(request):
    if request.method == "GET":
        users = User.objects.all()
        serializer = UserAllSerializer(users, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = UserAllSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ServiceReview
@api_view(["GET", "POST"])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticatedOrReadOnly])
def service_review_all(request):
    if request.method == "GET":
        service_review = ServiceReview.objects.all()
        service_review_serializer = ServicReviewAllSerializer(service_review, many=True)
        return Response(service_review_serializer.data)
    
    elif request.method == "POST":
        service_review_serializer = ServicReviewAllSerializer(data=request.data)
        if request.user.is_authenticated and service_review_serializer.is_valid():
            service_review_serializer.save()
            return Response(service_review_serializer.data, status=status.HTTP_201_CREATED)
        return Response(service_review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class KakaoLogin(View):
    def get(self, request):
        kakao_access_code=request.GET.get('code',None)
        url="https://kauth.kakao.com/oauth/token"
        headers={"Content-type":"application/x-www-form-urlencoded; charset=utf-8"}
        body={"grant_type":"authorization_code",
                "client_id":"4fb67e3c47027d004aa591828f76d364",
                "redirect_uri":"http://localhost:8000/rest-auth/kakao",
                "code":kakao_access_code}
        token_kakao_response=requests.post(url,headers=headers,data=body)
        access_token=json.loads(token_kakao_response.text).get("access_token")
        print("here",access_token)
        url="https://kapi.kakao.com/v2/user/me"
        headers={
            "Authorization":f"Bearer {access_token}",
            "Content-type":"application/x-www-form-urlencoded; charset=utf-8"
        }
        kakao_response=requests.post(url,headers=headers)
        kakao_response=json.loads(kakao_response.text)
        print(kakao_response)
        return HttpResponse(f'{kakao_response}')