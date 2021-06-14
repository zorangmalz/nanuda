from django.shortcuts import render, redirect
from django.views.generic import View
from django.http import HttpResponse,JsonResponse
from django.db.models import Count
import requests
import json
 
#보안
import jwt
from dotenv import load_dotenv
import os, subprocess, re, base64, sys

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
from datetime import date,datetime

 
#WishDeal Order
class orderUpload(View):
    def post(self, request):
        if not request.COOKIES.get("access_token"):
            return JsonResponse({"data":False})
        else:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])
            user_info=json.loads(request.body)
            print(user_info["params"]["myparam"][3]["Fprice"])
            print(user_info["params"]["ship"])
            print(user_info["params"]["payment"])
            print(user_info["params"]["option"])
            print(user_info["params"]["schedule"])
            year=str(datetime.today().year%100)
            if datetime.today().month<10:
                month="0"+str(datetime.today().month)
            else:
                month=str(datetime.today().month)
            
            day=str(datetime.today().day)
            hour=str(datetime.today().hour)
            minute=str(datetime.today().minute)
            second=str(datetime.today().second)
            print(year+month+day+hour+minute+second)
            print(user.id)
            #??외않되?
            Order(
                user_id=user,
                order_id="01",
                order_price=int(user_info["params"]["myparam"][3]["Fprice"])+int(user_info["params"]["myparam"][7]),
                order_amount=1,
                order_expected_date=user_info["params"]["schedule"],
                order_address_number=user_info["params"]["ship"]["addressNum"],
                order_address=user_info["params"]["ship"]["address"],
                order_address_detail=user_info["params"]["ship"]["addressDetail"],
                order_phone_number=user_info["params"]["ship"]["phoneNumber"],
                order_request=user_info["params"]["ship"]["request"],
                order_receiver=user_info["params"]["ship"]["name"],
                wish_haul="02",
                wish_url=user_info["params"]["myparam"][0]["requestUrl"],
                wish_title=user_info["params"]["myparam"][0]["ogTitle"],
                wish_des=user_info["params"]["myparam"][0]["ogDescription"],
                wish_image=user_info["params"]["myparam"][0]["ogImage"]["url"]
            ).save()
            return JsonResponse({"data":True})

#주문 하나 확인
# class orderCheck(View):
#     def get(self, request):
#             if not request.COOKIES.get("access_token"):
#                 return JsonResponse({"data":False})
#             else:
#                 load_dotenv(verbose=True)
#                 SECRET_KEY=os.getenv("SECRET_KEY")
#                 ALGORITHM=os.getenv("ALGORITHM")
#                 token=request.COOKIES.get("access_token")
#                 payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
#                 user=User.objects.get(uid=payload["id"])
                
#서비스 리뷰 조회(작성 or not)
class serviceReviewOrNOt(View):
    def get(self, request):
        if not request.COOKIES.get("access_token"):
            return JsonResponse({"data":False})
        else:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])
            print(user.name)
            if ServiceReview.objects.filter(user_id=user.id).exists():
                return JsonResponse({"data":False,"id":user.id})
            else:
                return JsonResponse({"data":True,"id":user.id})
            


class userInfoName(View):
    def get(self, request):
        if not request.COOKIES.get("access_token"):
            return JsonResponse({"data":False})
        else:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])
            print(user.name)
            return JsonResponse({"data":True,"name":user.name,"email":user.user_email})

class uploadAddress(View):
    def post(self,request):
        if not request.COOKIES.get("access_token"):
            return JsonResponse({"data":False})
        else:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])
            user_info=json.loads(request.body)
            print(user_info)
            user.address_number=user_info["params"]["address_code"]
            user.address=user_info["params"]["address"]
            user.address_detail=user_info["params"]["address_detail"]
            user.address_claim=user_info["params"]["address_claim"]
            user.address_phone=user_info["params"]["address_phone"]
            user.address_name=user_info['params']['address_name']
            user.address_exist=True
            user.save()

            return JsonResponse({"data":True})
class checkAddress(View):
    def get(self,request):
        if not request.COOKIES.get("access_token"):
            return JsonResponse({"data":False})
        else:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])
            if user.address_exist==False :
                return JsonResponse({"data":False})
            else:
                return JsonResponse({"data":True,"address_name":user.address_name,"address_phone":user.address_phone,"address_claim":user.address_claim,"address_detail":user.address_detail,"address":user.address,"address_number":user.address_number})
            

            
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
        # print(kakao_response)
        if User.objects.filter(uid=kakao_response['id']).exists():
            user    = User.objects.get(uid=kakao_response['id'])
            jwt_token = jwt.encode({'id':user.uid}, SECRET_KEY,ALGORITHM)
            print(jwt_token,type(jwt_token))
            if type(jwt_token) is bytes : 
                jwt_token=jwt_token.decode('utf-8')
                print(jwt_token,"fixed")
            
            res=HttpResponse({"success":True})
            res["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
            res["Access-Control-Allow-Credentials"]="true"
            res["Access-Control-Allow-Origin"] = "http://haulfree.io"
            res["Acess-Control-Max-Age"] = "1000"
            res["Access-Control-Allow-Headers"] = "X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept"
            res.set_cookie(key="access_token",value=jwt_token,samesite=None,httponly=True,secure=True)
            return res

        else: 
            q=User.objects.annotate(Count("name"))
            print(q.count())
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
                nickname="나누다"+str(q.count()+1)
                
            ).save()
            user    = User.objects.get(uid=kakao_response['id'])
            jwt_token = jwt.encode({'id':user.uid}, SECRET_KEY, ALGORITHM)
            print(jwt_token,type(jwt_token))
            if type(jwt_token) is bytes : 
                jwt_token=jwt_token.decode('utf-8')
                print(jwt_token,"fixed")
            res=HttpResponse({"success":True})
            res["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
            res["Access-Control-Allow-Credentials"]="true"
            res["Access-Control-Allow-Origin"] = "http://haulfree.io"
            res["Acess-Control-Max-Age"] = "1000"
            res["Access-Control-Allow-Headers"] = "X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept"
            res.set_cookie(key="access_token",value=jwt_token,samesite=None,httponly=True,secure=True)
            return res


class niceMain(View):
    def post(self,request):
        # NICE평가정보에서 발급한 안심본인인증 서비스 개발정보 (사이트코드, 사이트패스워드)
        sitecode = 'BU543'   
        sitepasswd = 'oaRvzS50f3Ir'   

        # 안심본인인증 모듈의 절대경로 (권한:755, FTP업로드방식: 바이너리)
        # ex) cb_encode_path = 'C:\\module\\CPClient.exe'
        #     cb_encode_path = '/root/module/CPClient'
        cb_encode_path = '/home/ubuntu/nanuda/backend/CPClient_64bit' 

        # 인증성공 시 결과데이터 받는 리턴URL (방식:절대주소, 필수항목:프로토콜)   
        returnurl = 'http://localhost:5000/checkplus_success'  
        
        # 인증실패 시 결과데이터 받는 리턴URL (방식:절대주소, 필수항목:프로토콜)   
        errorurl = 'http://localhost:5000/checkplus_fail'  

        # 팝업화면 설정
        authtype = ''		# 인증타입 (공백:기본 선택화면, X:공인인증서, M:핸드폰, C:카드)
        popgubun = 'N'		# 취소버튼 (Y:있음, N:없음)
        customize = ''		# 화면타입 (공백:PC페이지, Mobile:모바일페이지)
        gender = ''			# 성별설정 (공백:기본 선택화면, 0:여자, 1:남자)

        # 요청번호 초기화 
        # :세션에 저장해 사용자 특정 및 데이타 위변조 검사에 이용하는 변수 (인증결과와 함께 전달됨)	
        reqseq = ''

        # 인증요청 암호화 데이터 초기화
        enc_data = ''

        # 처리결과 메세지 초기화
        returnMsg = ''

        # 요청번호 생성
        try:
            # 파이썬 버전이 3.5 미만인 경우 check_output 함수 이용
            #  reqseq = subprocess.check_output([cb_encode_path, 'SEQ', sitecode])  
            reqseq = subprocess.run([cb_encode_path, 'SEQ', sitecode], capture_output=True, encoding='euc-kr').stdout
        except subprocess.CalledProcessError as e:
            # check_output 함수 이용하는 경우 1 이외의 결과는 에러로 처리됨
            reqseq = e.output.decode('euc-kr')
            print('cmd:', e.cmd, '\n output:', e.output)
        finally:       
            print('reqseq:', reqseq)

        # 요청번호 세션에 저장 (세션 이용하지 않는 경우 생략)
        session['REQ_SEQ'] = reqseq

        # plain 데이터 생성 (형식 수정불가)
        plaindata = '7:REQ_SEQ' + str(len(reqseq)) + ':' + reqseq + '8:SITECODE' + str(len(sitecode)) + ':' + sitecode + '9:AUTH_TYPE' + str(len(authtype)) + ':' + authtype + '7:RTN_URL' + str(len(returnurl)) + ':' + returnurl + '7:ERR_URL' + str(len(errorurl)) + ':' + errorurl + '11:POPUP_GUBUN' + str(len(popgubun)) + ':' + popgubun + '9:CUSTOMIZE' + str(len(customize)) + ':' + customize + '6:GENDER' + str(len(gender)) + ':' + gender
        
        # 인증요청 암호화 데이터 생성
        try:
            # 파이썬 버전이 3.5 미만인 경우 check_output 함수 이용
            #  enc_data = subprocess.check_output([cb_encode_path, 'ENC', sitecode, sitepasswd, plaindata])
            enc_data = subprocess.run([cb_encode_path, 'ENC', sitecode, sitepasswd, plaindata],  capture_output=True, encoding='euc-kr').stdout
        except subprocess.CalledProcessError as e:
            # check_output 함수 이용하는 경우 1 이외의 결과는 에러로 처리됨
            enc_data = e.output.decode('euc-kr')
            print('cmd:', e.cmd, '\n output:\n', e.output)
        finally:       
            print('enc_data:\n', enc_data)

        # 화면 렌더링 변수 설정 
        # render_params = {}  
        # render_params['enc_data'] = enc_data
        # render_params['returnMsg'] = returnMsg 
        return JsonResponse({"enc":enc_data,"return":returnMsg})
	