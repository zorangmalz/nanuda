from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class User(models.Model):
    MAN = 0
    WOMAN = 1
    GENDER_CHOICE = [
        (MAN, "남성"),
        (WOMAN, "여성"),
    ]
    id = models.BigAutoField(primary_key=True)
    user_email = models.EmailField(unique=True)
    nickname = models.TextField(unique=True)
    name = models.TextField(unique=True, default="나누다")
    gender = models.IntegerField(choices=GENDER_CHOICE)
    age = models.PositiveIntegerField()
    joinday = models.DateTimeField(auto_now_add=True)
    limit =  models.IntegerField()
    profile = models.URLField()
    phone_number = PhoneNumberField(blank=True)
    address_number = models.TextField(blank=True, default="우편번호")
    address = models.TextField(blank=True, default="주소")
    address_detail = models.TextField(blank=True, default="상세주소")
    point = models.IntegerField(default=0)
    # 은행에 대한 choice 필요
    bank = models.CharField(max_length=30, blank=True, default="은행")
    account = models.CharField(max_length=30, blank=True, default="계좌")

    class Meta:
        ordering = ["id", "joinday"]
        db_table = "user"

    def __str__(self):
        return self.user_email
    

class ServiceReview(models.Model):
    id = models.BigAutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.PROTECT)
    service_date = models.DateTimeField(auto_now_add=True)
    service_score = models.FloatField(default=5.0, blank=True)
    service_content = models.CharField(max_length=300, blank=True, null=True)

    def user_name(self):
        return self.user_id.name

    def user_age(self):
        return self.user_id.age
    
    def user_gender(self):
        return self.user_id.gender

    class Meta:
        ordering = ["id", "service_date"]
        db_table = "servicereview"
    
class Product(models.Model):
    id = models.BigAutoField(primary_key=True)
    product_type = models.CharField(blank=True, default="제품 종류", max_length=10)
    product_source = models.URLField()
    product_name = models.CharField(blank=True, default="제품 이름", max_length=10)
    product_price = models.PositiveIntegerField()
    product_image = models.URLField()
    product_stock = models.PositiveIntegerField()
    product_option = models.JSONField(default=dict)
    product_option_price = models.PositiveIntegerField()
    product_shipping_price = models.PositiveIntegerField()

    class Meta:
        ordering = ["id", "product_type", "product_price"]
        db_table = 'product'


class Review(models.Model):
    id = models.BigAutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.PROTECT)
    product_id = models.ForeignKey(Product, on_delete=models.PROTECT)
    review_date = models.DateTimeField(auto_now_add=True)
    review_content = models.TextField(default="내용", blank=True)
    review_image = models.URLField()
    review_alert = models.IntegerField(default=0)
    review_rating = models.IntegerField(default=0)
    review_follower = models.IntegerField(default=0)

    def user_nickname(self):
        return self.user_id.nickname
    
    def user_profile(self):
        return self.user_id.profile

    class Meta:
        ordering=["id", "review_date"]
        db_table = 'review'

class Order(models.Model):
    id = models.BigAutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.PROTECT)
    product_id = models.ForeignKey(Product, on_delete=models.PROTECT)
    order_date = models.DateTimeField(auto_now_add=True)
    order_price = models.PositiveIntegerField()
    order_amount = models.PositiveIntegerField()
    order_method = models.CharField(default="배달", max_length=10)
    order_expected_date = models.JSONField(default=dict)
    order_upfront_date = models.DateTimeField(blank=True)
    order_receiver = models.CharField(default="수령인", max_length=30)
    order_address_number = models.TextField(default="우편번호")
    order_address = models.TextField(default="주소")
    order_address_detail = models.TextField(default="상세주소")
    order_phone_number = PhoneNumberField()
    order_request = models.TextField(default="주문 요청사항")
    
    def product_name(self):
        return self.product_id.product_name
    
    def product_image(self):
        return self.product_id.product_image
    
    def product_price(self):
        return self.product_id.product_price
    
    class Meta:
        ordering = ["id", "order_date"]
        db_table = 'order'

