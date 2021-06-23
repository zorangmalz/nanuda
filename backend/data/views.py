#보안
import os
from django.http.response import HttpResponse, JsonResponse
import jwt
import urllib.request
from dotenv import load_dotenv
import json

# API 제작 - 상태, 기능, 인증, 권한, Header(JSON)
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes, parser_classes
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.parsers import JSONParser

# Model Import 
from nanuda.models import PointList, User, ServiceReview, Product, Review, Order
from nanuda.serializers import OrderSerializer, UserAllSerializer, ServicReviewAllSerializer, ProductAllSerializer, ReviewAllSerializer, OrderAllSerializer

#Python 내장함수
from datetime import date


# 추후에 View에 추가할 요소
# @permission_classes([IsAuthenticatedOrReadOnly])
# 이 Decorator를 사용하는 것이 중요

# User Information
@api_view(["GET", "POST"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
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

# User 하나만 보여줌
@api_view(["GET", "PUT", "DELETE"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def user_one(request):
    if not request.COOKIES.get("access_token"):
        return Response(status=status.HTTP_404_NOT_FOUND)
    else:
        try:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])

        except User.DoesNotExist():
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == "GET":
            user_serializer = UserAllSerializer(user)
            return Response(user_serializer.data)
        
        elif request.method == "PUT":
            user_serializer = UserAllSerializer(user, data=request.data)
            if user_serializer.is_valid():
                user_serializer.save()
                return Response(user_serializer.data)
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        elif request.method == 'DELETE':
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(["GET", "PUT"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def user_info_order(request):
    if not request.COOKIES.get("access_token"):
        return Response(status=status.HTTP_404_NOT_FOUND)
    else:
        try:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])

        except User.DoesNotExist():
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == "GET":
            user_serializer = UserAllSerializer(user)
            return Response(user_serializer.data)
        
        elif request.method == "PUT":
            user_serializer = UserAllSerializer(user, data=request.data)
            if user_serializer.is_valid():
                user_serializer.save()
                return Response(user_serializer.data)
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ServiceReview
@api_view(["GET", "POST"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def service_review_all(request):
    if request.method == "GET":
        service_review = ServiceReview.objects.all().order_by("-service_date")
        service_review_serializer = ServicReviewAllSerializer(service_review, many=True)
        return Response(service_review_serializer.data)
     
    elif request.method == "POST":
        service_review_serializer = ServicReviewAllSerializer(data=request.data)
        if service_review_serializer.is_valid():
            service_review_serializer.save()
            return Response(service_review_serializer.data, status=status.HTTP_201_CREATED)
        return Response(service_review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ServiceReview_Home 2개만 조회
@api_view(["GET"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def service_review_home(request):
    if request.method == "GET":
        service_review = ServiceReview.objects.all().order_by("-service_date")[0:2]
        service_review_serializer = ServicReviewAllSerializer(service_review, many=True)
        return Response(service_review_serializer.data)

# Product
@api_view(["GET", "POST"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
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

# Review 전체를 보여줌
@api_view(["GET", "POST"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def review_all(request):
    if request.method == "GET":
        review = Review.objects.all().order_by("-review_date")
        review_serializer = ReviewAllSerializer(review, many=True)
        return Response(review_serializer.data)
    
    elif request.method == "POST":
        if not request.COOKIES.get("access_token"):
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            try:
                load_dotenv(verbose=True)
                SECRET_KEY=os.getenv("SECRET_KEY")
                ALGORITHM=os.getenv("ALGORITHM")
                token=request.COOKIES.get("access_token")
                payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
                user=User.objects.get(uid=payload["id"])

            except User.DoesNotExist():
                return Response(status=status.HTTP_404_NOT_FOUND)
            
            data = json.loads(request.body)

            order = Order.objects.get(id = data["order_id"])
            Review.objects.create(
                user_id = user,
                order_id = order,
                review_score = data["review_score"],
                review_like = data["review_like"],
                review_dislike = data["review_dislike"],
                review_image = data["review_image"]
            )
            order.review_write = True
            order.save()
            return Response(status=status.HTTP_201_CREATED)

# Review_Home 2개만 조회
@api_view(["GET"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def review_home(request):
    if request.method == "GET":
        review = Review.objects.all().order_by("-review_date")[0:2]
        review_serializer = ReviewAllSerializer(review, many=True)
        return Response(review_serializer.data)

# My_Review 2개만 조회
@api_view(["GET"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def review_profile(request, pk):
    if not request.COOKIES.get("access_token"):
        return Response(status=status.HTTP_404_NOT_FOUND)
    else:
        try:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])

        except User.DoesNotExist():
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == "GET":
            review = Review.objects.filter(user_id = user.id).order_by("-review_date")
            count = len(review)
            if (pk + 4 > count):
                my_reviews = review[pk:count]
            else:
                my_reviews = review[pk:pk+4]

            lists = []
            for my_review in my_reviews:
                lists.append({
                    "user_nickname": my_review.user_nickname(),
                    "user_profile": my_review.user_profile(),
                    "review_image": my_review.review_image,
                    "review_score": my_review.review_score,
                    "review_like": my_review.review_like,
                    "order_price": my_review.order_price(),
                })
            return JsonResponse({
                "review_list": lists
            })

# Review 하나만 보여줌
@api_view(["GET", "PUT", "DELETE"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def review_one(request, pk):
    try:
        review = Review.objects.get(pk=pk)
    except Review.DoesNotExist():
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        review_serializer = ReviewAllSerializer(review)
        return Response(review_serializer.data)
    
    elif request.method == "PUT":
        review_serializer = ReviewAllSerializer(review, data=request.data)
        if review_serializer.is_valid():
            review_serializer.save()
            return Response(review_serializer.data)
        return Response(review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Order
@api_view(["GET", "POST"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
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

@api_view(["GET", "PUT"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def order_list(request):
    if not request.COOKIES.get("access_token"):
        return Response(status=status.HTTP_404_NOT_FOUND)
    else:
        try:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])

        except User.DoesNotExist():
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == "GET":
            orders = Order.objects.filter(user_id = user.id).order_by('-order_date')
            arrays = []
            for order in orders:
                arrays.append({
                    "id": order.id,
                    "order_date": order.order_date,
                    "order_price": order.order_price,
                    "product_id": order.product_id.id,
                    "product_name": order.product_name(),
                    "product_image": order.product_image(),
                    "product_price": order.product_price(),
                    "review_write": order.review_write,
                })
            return JsonResponse({
                "data": arrays
            })

@api_view(["GET"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def order_one(request):
    if not request.COOKIES.get("access_token"):
        return Response(status=status.HTTP_404_NOT_FOUND)
    else:
        try:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])

        except User.DoesNotExist():
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == "GET":
            order = Order.objects.get(user_id = user.id, product_id = request.GET.get("product", None))
            return JsonResponse({
                "id": order.id,
                "order_id": order.order_id,
                "order_receiver": order.order_receiver,
                "order_address_number": order.order_address_number,
                "order_address": order.order_address,
                "order_address_detail": order.order_address_detail,
                "order_phone_number": order.order_phone_number,
                "order_request": order.order_request,
                "product_name": order.product_name(),
                "product_image": order.product_image(),
                "product_price": order.product_price()
            })

@api_view(["GET", "POST"])
@parser_classes([JSONParser])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def point_list(request):
    if not request.COOKIES.get("access_token"):
        return Response(status=status.HTTP_404_NOT_FOUND)
    else:
        try:
            load_dotenv(verbose=True)
            SECRET_KEY=os.getenv("SECRET_KEY")
            ALGORITHM=os.getenv("ALGORITHM")
            token=request.COOKIES.get("access_token")
            payload=jwt.decode(token,SECRET_KEY,ALGORITHM)
            user=User.objects.get(uid=payload["id"])

        except User.DoesNotExist():
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        if request.method == "GET":
            points = PointList.objects.filter(user_id = user.id)
            list = []
            for point in points:
                list.append({
                    "date": point.date,
                    "content": point.content,
                    "add_or_sub": point.add_or_sub,
                    "point": point.point
                })
            return JsonResponse({
                "point_list": list,
                "point_entire": user.point_entire
            })
        
        elif request.method == "POST":
            data = json.loads(request.body)
            if str(data["add_or_sub"]).lower() == 'false':
                PointList.objects.create(
                    user_id=user,
                    content=data["content"],
                    add_or_sub=False,
                    point=data["point"]
                )
                user.point_entire = user.point_entire - data["point"]
                user.save()
                return Response(status=status.HTTP_201_CREATED)
            elif str(data["add_or_sub"]).lower() == 'true':
                PointList.objects.create(
                    user_id=user,
                    content=data["content"],
                    add_or_sub=True,
                    point=data["point"]
                )
                user.point_entire = user.point_entire + data["point"]
                user.save()
                return Response(status=status.HTTP_201_CREATED)