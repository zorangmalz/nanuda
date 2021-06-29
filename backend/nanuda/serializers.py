from rest_framework import serializers
from nanuda.models import Address, MissionList, PaymentHistory, User, ServiceReview, Product, Review, Order, WishDeal

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
    user_name = serializers.SerializerMethodField()

    def get_user_name(self, obj):
        return obj.user_name()

    class Meta:
        model = Review
        fields = "__all__"

class OrderAllSerializer(serializers.ModelSerializer):
    product_name = serializers.SerializerMethodField()
    product_image = serializers.SerializerMethodField()
    product_price = serializers.SerializerMethodField()
    payment_history = serializers.SerializerMethodField()

    def get_product_name(self, obj):
        return obj.product_name()
    
    def get_product_image(self, obj):
        return obj.product_image()

    def get_product_price(self, obj):
        return obj.product_price()
    
    def get_payment_history(self, obj):
        paymentHistory = PaymentHistory.objects.filter(order_id = obj.id, whether_like=True)
        paymentHistory_serializer = PaymentHistorySerializer(paymentHistory, many=True)
        return paymentHistory_serializer.data

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

class MissionAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = MissionList
        fields = "__all__"

class AddressAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ["temp_receiver", "temp_phone_number", "temp_claim", "address_number", "address", "address_detail"]

class WishAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishDeal
        fields = "__all__"

class PaymentHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentHistory
        fields = ["date", "num", "payment"]