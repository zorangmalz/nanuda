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
    id = models.AutoField(primary_key=True)
    user_email = models.EmailField(unique=True)
    nickname = models.TextField(unique=True)
    gender = models.IntegerField(choices=GENDER_CHOICE)
    age = models.PositiveIntegerField()
    joinday = models.DateTimeField(auto_now_add=True)
    limit =  models.IntegerField()
    profile = models.URLField()
    phone_number = PhoneNumberField()