from django.shortcuts import render, redirect
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from django.views.generic import View
from django.http import HttpResponse,JsonResponse
import requests
import json

#보안
import jwt
from dotenv import load_dotenv
import os

# API 제작 - 상태, 기능, 인증, 권한, Header(JSON)
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes, parser_classes
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.parsers import JSONParser

# Model Import 
from nanuda.models import User, ServiceReview, Product, Review, Order
from nanuda.serializers import UserAllSerializer, ServicReviewAllSerializer, ProductAllSerializer, ReviewAllSerializer, OrderAllSerializer

#Python 내장함수
from datetime import date



# Create your views here.
# FacebookLogin
class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

# GoogleLogin
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter


# User Information
@api_view(["GET", "POST"])
@parser_classes([JSONParser])
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
@parser_classes([JSONParser])
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


# Product
@api_view(["GET", "POST"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticatedOrReadOnly])
def product_all(request):
    if request.method == "GET":
        product = Product.objects.all()
        product_serializer = ProductAllSerializer(product, many=True)
        return Response(product_serializer.data)
    
    elif request.method == "POST":
        product_serializer = ProductAllSerializer(data=request.data)
        if request.user.is_authenticated and product_serializer.is_valid():
            product_serializer.save()
            return Response(product_serializer.data, status=status.HTTP_201_CREATED)
        return Response(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Review
@api_view(["GET", "POST"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticatedOrReadOnly])
def review_all(request):
    if request.method == "GET":
        review = Review.objects.all()
        review_serializer = ReviewAllSerializer(review, many=True)
        return Response(review_serializer.data)
    
    elif request.method == "POST":
        review_serializer = ReviewAllSerializer(data=request.data)
        if request.user.is_authenticated and review_serializer.is_valid():
            review_serializer.save()
            return Response(review_serializer.data, status=status.HTTP_201_CREATED)
        return Response(review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Order
@api_view(["GET", "POST"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticatedOrReadOnly])
def order_all(request):
    if request.method == "GET":
        order = Order.objects.all()
        order_serializer = OrderAllSerializer(order, many=True)
        return Response(order_serializer.data)
    
    elif request.method == "POST":
        order_serializer = OrderAllSerializer(data=request.data)
        if request.user.is_authenticated and order_serializer.is_valid():
            order_serializer.save()
            return Response(order_serializer.data, status=status.HTTP_201_CREATED)
        return Response(order_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class test(View):
    def get(self, request):
        # url=request.GET.get("code",None)
        req=request.COOKIES.get("access_token")
        print(req) 
        return HttpResponse({"cookie":req})
        
        
class KakaoLogin(View):
    def get(self, request):
        load_dotenv(verbose=True)
        SECRET_KEY=os.getenv("SECRET_KEY")
        ALGORITHM=os.getenv("ALGORITHM")
        kakao_access_code=request.GET.get('code',None)
        url="https://kapi.kakao.com/v2/user/me"
        headers={
            "Authorization":f"Bearer {kakao_access_code}",
            "Content-type":"application/x-www-form-urlencoded; charset=utf-8"
        }
        kakao_response=requests.post(url,headers=headers)
        kakao_response=json.loads(kakao_response.text)
        print(kakao_response)
        if User.objects.filter(uid=kakao_response['id']).exists():
            user    = User.objects.get(uid=kakao_response['id'])
            jwt_token = jwt.encode({'id':user.id}, SECRET_KEY,ALGORITHM)
            print(jwt_token)
            # return HttpResponse(f'id:{user.id}, name:{user.name}, token:{jwt_token}, exist:true')
            
            res=HttpResponse({"success":True})
            res.set_cookie("access_token",jwt_token,httponly=True,secure=True,samesite=None)
            return res
        else: 
            
            print(kakao_response['kakao_account']['gender'])
            if kakao_response['kakao_account']['gender']=="male":
                gender=0
            else:
                gender=1            
            User(
                uid=kakao_response['id'],
                platform="1",
                user_email=kakao_response['kakao_account'].get('email',None),
                name=kakao_response['properties']['nickname'],
                gender=gender,
                
            ).save()
            user    = User.objects.get(uid=kakao_response['id'])
            jwt_token = jwt.encode({'id':user.id}, SECRET_KEY, ALGORITHM)
            print(jwt_token)
            # return HttpResponse(f'id:{user.id}, name:{user.name}, token:{jwt_token}, exist:false')
            res=HttpResponse({"success":True})
            res.set_cookie("access_token",jwt_token,httponly=True,secure=True,samesite=None)
            return res