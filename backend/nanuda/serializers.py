from rest_framework import serializers
from nanuda.models import User, ServiceReview, Product, Review, Order

class UserAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class ServicReviewAllSerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField()
    user_age = serializers.SerializerMethodField()
    user_gender = serializers.SerializerMethodField()

    def get_user_name(self, obj):
        return obj.user_name()

    def get_user_age(self, obj):
        return obj.user_age()

    def get_user_gender(self, obj):
        return obj.user_gender()

    class Meta:
        model = ServiceReview
        fields = "__all__"

class ProductAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class ReviewAllSerializer(serializers.ModelSerializer):
    user_nickname = serializers.SerializerMethodField()
    user_profile = serializers.SerializerMethodField()

    def get_user_nickname(self, obj):
        return obj.user_nickname()
    
    def get_user_profile(self, obj):
        return obj.user_profile()

    class Meta:
        model = Review
        fields = "__all__"

class OrderAllSerializer(serializers.ModelSerializer):
    product_name = serializers.SerializerMethodField()
    product_image = serializers.SerializerMethodField()
    product_price = serializers.SerializerMethodField()

    def get_product_name(self, obj):
        return obj.product_name()
    
    def get_product_image(self, obj):
        return obj.product_image()

    def get_product_price(self, obj):
        return obj.product_price()

    class Meta:
        model = Order
        fields = "__all__"

class OrderSerializer(serializers.ModelSerializer):
    product_name = serializers.SerializerMethodField()
    product_image = serializers.SerializerMethodField()
    product_price = serializers.SerializerMethodField()

    def get_product_name(self, obj):
        return obj.product_name()
    
    def get_product_image(self, obj):
        return obj.product_image()

    def get_product_price(self, obj):
        return obj.product_price()

    class Meta:
        model = Order
        fields = [
            "order_id", 
            "order_receiver", 
            "order_address_number", 
            "order_address", 
            "order_address_detail", 
            "order_phone_number", 
            "order_request",
            "product_name",
            "product_image",
            "product_price"
        ]