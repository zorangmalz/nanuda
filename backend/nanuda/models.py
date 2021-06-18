from django.db import models
import uuid
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class PointList(models.Model):
    id = models.BigAutoField(primary_key=True)
    date = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=50, default="")
    add_or_sub = models.BooleanField(default=True)
    point = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.date
    
    class Meta:
        managed=True

class User(models.Model):
    MAN = "1"
    WOMAN = "0"
    GENDER_CHOICE = [
        (MAN, "남성"),
        (WOMAN, "여성"),
    ]
    id = models.BigAutoField(primary_key=True)
    user_email = models.EmailField()
    nickname = models.CharField(unique=True,blank=True, max_length=30) 
    name = models.TextField(default="나누다")
    job = models.CharField(max_length=30, default="",blank=True)
    gender = models.IntegerField(choices=GENDER_CHOICE, default="",blank=True)
    birthdate = models.CharField(max_length=30, default="",blank=True)
    joinday = models.DateTimeField(auto_now_add=True)
    limit =  models.IntegerField(blank=True, default=0)
    age = models.PositiveIntegerField(blank=True, default=0)
    profile = models.TextField(blank=True, default="")
    phone_number = models.CharField(max_length=30, default="01090373600",blank=True)
    phone_company = models.CharField(max_length=30, default="SKT",blank=True)
    nationalinfo = models.CharField(max_length=30, default="0",blank=True)
    address_exist=models.BooleanField(blank=True,default=False)
    address_number = models.TextField(blank=True, default="우편번호")
    address = models.TextField(blank=True, default="주소")
    address_detail = models.TextField(blank=True, default="상세주소")
    address_claim = models.CharField(max_length=30,default="문 앞")
    address_name = models.CharField(max_length=30,default="나누다씨")
    address_phone = models.CharField(max_length=30,default="01090373600")
    # point 저장소
    point = models.ForeignKey(PointList, on_delete=models.CASCADE, blank=True, null=True)
    # point 전체 값
    point_entire = models.PositiveIntegerField(default=0)

    platform = models.CharField(max_length=30, default="0")
    uid = models.CharField(max_length=300, default="")
    # 은행에 대한 choice 필요
    bank_exist=models.BooleanField(blank=True,default=False)
    bank = models.CharField(max_length=30, blank=True, default="은행")
    account = models.CharField(max_length=30, blank=True, default="계좌")

    def __str__(self):
        return "{}".format(self.user_email)

    class Meta:
        ordering = ["id", "joinday"]
        managed=True
    

class ServiceReview(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.PROTECT, blank=True, null=True)
    service_date = models.DateTimeField(auto_now_add=True)
    service_score = models.FloatField(default=5.0, blank=True)
    service_content = models.CharField(max_length=300, blank=True, null=True)
    service_opinion = models.CharField(max_length=300, blank=True, null=True)

    def user_name(self):
        return self.user_id.name

    def user_age(self):
        return self.user_id.age
    
    def user_gender(self):
        return self.user_id.gender

    def __str__(self):
        return "{}".format(self.user_id)
    

    class Meta:
        ordering = ["id", "service_date"]
        managed=True
    
class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product_type = models.CharField(blank=True, default="제품 종류", max_length=10)
    product_source = models.URLField()
    product_name = models.CharField(blank=True, default="제품 이름", max_length=10)
    product_price = models.PositiveIntegerField()
    product_image = models.URLField()
    product_stock = models.PositiveIntegerField()
    product_option = models.JSONField(default=dict)
    product_option_price = models.PositiveIntegerField()
    product_shipping_price = models.PositiveIntegerField()

    def __str__(self):
        return "{}".format(self.product_name)

    class Meta:
        ordering = ["id", "product_type", "product_price"]
        managed=True


class Review(models.Model):
    id = models.BigAutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    review_score = models.FloatField(default=5.0, blank=True)
    review_date = models.DateTimeField(auto_now_add=True)
    review_like = models.TextField(default="내용", blank=True)
    review_dislike = models.TextField(default="내용", blank=True)
    review_image = models.JSONField(default=list, blank=True)
    review_alert = models.IntegerField(default=0)
    review_likeNum = models.IntegerField(default=0)
    review_dislikeNum = models.IntegerField(default=0)

    def user_nickname(self):
        return self.user_id.nickname
    
    def user_profile(self):
        return self.user_id.profile

    def __str__(self):
        return "{}".format(self.user_id)

    class Meta:
        ordering=["id", "review_date"]
        managed=True

class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    order_id=models.CharField(default="01210413135901010000", blank=False, max_length=30)
    order_date = models.DateTimeField(auto_now_add=True)
    order_price = models.PositiveIntegerField()
    order_amount = models.PositiveIntegerField()
    order_method = models.CharField(default="배달", max_length=10)
    order_expected_date = models.JSONField(default=dict)
    # order_upfront_date = models.DateTimeField(blank=True,default="")
    order_receiver = models.CharField(default="수령인", max_length=30)
    order_address_number = models.TextField(default="우편번호")
    order_address = models.TextField(default="주소")
    order_address_detail = models.TextField(default="상세주소")
    order_phone_number = models.CharField(default="", max_length=30)
    order_request = models.TextField(default="주문 요청사항")
    wish_haul=models.CharField(default="" ,blank=True, max_length=30)
    wish_url=models.CharField(default="http://" ,blank=True, max_length=30)
    wish_title=models.CharField(default="" ,blank=True, max_length=30)
    wish_des=models.CharField(default="" ,blank=True, max_length=30)
    wish_image=models.CharField(default="" ,blank=True, max_length=30)
    review_write = models.BooleanField(default=False)
    
    def product_name(self):
        return self.product_id.product_name
    
    def product_image(self):
        return self.product_id.product_image
    
    def product_price(self):
        return self.product_id.product_price
    
    def __str__(self):
        return "{}".format(self.user_id)
    
    class Meta:
        ordering = ["id", "order_date"]
        managed=True