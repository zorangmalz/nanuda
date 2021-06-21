from django.contrib import admin
from nanuda.models import Address, User, ServiceReview, Product, Review, Order, PointList

# Register your models here.
admin.site.register(User)
admin.site.register(ServiceReview)
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(PointList)
admin.site.register(Address)