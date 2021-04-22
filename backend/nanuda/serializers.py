from rest_framework import serializers
from .models import User, ServiceReview, Product, Review, Order

class UserAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class ServicReviewAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceReview
        fields = "__all__"

class ProductAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class ReviewAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"

class OrderAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"