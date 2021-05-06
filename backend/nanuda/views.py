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

class userInfoName(View):
    def get(self, request):
        if not request.COOKIES.get("access_token"):
            return HttpResponse("false")
        else:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])
            print(user.name)
            return JsonResponse({"name":user.name,"email":user.user_email})


# class changeAddress(Vie):
#     def get(self,request):

class GoogleLogin(View):
    def post(self, request):
        load_dotenv(verbose=True)
        SECRET_KEY=os.getenv("SECRET_KEY")
        ALGORITHM=os.getenv("ALGORITHM")
        kakao_access_code=json.loads(request.body)
        
        google_uid=kakao_access_code["params"]["code"]["profileObj"]["googleId"]
        google_name=kakao_access_code["params"]["code"]["profileObj"]["name"]
        google_email=kakao_access_code["params"]["code"]["profileObj"]["email"]
        print(google_email,google_name,google_uid)
        if User.objects.filter(uid=google_uid).exists():
            user    = User.objects.get(uid=google_uid)
            jwt_token = jwt.encode({'id':user.uid}, SECRET_KEY,ALGORITHM)
            print(jwt_token)
            res=HttpResponse({"success":True})
            res.set_cookie(key="access_token",value=jwt_token,httponly=True,secure=True)
            return res
        else:            
            User(
                uid=google_uid,
                platform="1",
                user_email=google_email,
                name=google_name,
                
                
            ).save()
            user    = User.objects.get(uid=google_uid)
            jwt_token = jwt.encode({'id':user.uid}, SECRET_KEY, ALGORITHM)
            print(jwt_token)
            res=HttpResponse({"success":True})
            res.set_cookie(key="access_token",value=jwt_token,httponly=True,secure=True)
            return res
        

class KakaoLogin(View):
    def post(self, request):
        
        load_dotenv(verbose=True)
        SECRET_KEY=os.getenv("SECRET_KEY")
        ALGORITHM=os.getenv("ALGORITHM")
        kakao_access_code=json.loads(request.body)
        print("herere",kakao_access_code["params"]["code"])
        url="https://kapi.kakao.com/v2/user/me"
        real_code=kakao_access_code["params"]["code"]
        headers={
            "Authorization":f"Bearer {real_code}",
            "Content-type":"application/x-www-form-urlencoded; charset=utf-8"
        }
        kakao_response=requests.post(url,headers=headers)
        kakao_response=json.loads(kakao_response.text)
        print(kakao_response)
        if User.objects.filter(uid=kakao_response['id']).exists():
            user    = User.objects.get(uid=kakao_response['id'])
            jwt_token = jwt.encode({'id':user.uid}, SECRET_KEY,ALGORITHM)
            print(jwt_token)
           
            
            res=HttpResponse({"success":True})
           
            res.set_cookie(key="access_token",value=jwt_token,httponly=True,secure=True)
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
            jwt_token = jwt.encode({'id':user.uid}, SECRET_KEY, ALGORITHM)
            print(jwt_token)
          
            res=HttpResponse({"success":True})
          
            res.set_cookie(key="access_token",value=jwt_token,httponly=True,secure=True)
            return res


