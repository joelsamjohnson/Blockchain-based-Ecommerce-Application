from django.contrib import admin
from .models import Consumer,Manufacturer,Distributor,Retailer,Product,Order_Items,Payment_Details,Order_Details

admin.site.register(Consumer)
admin.site.register(Manufacturer)
admin.site.register(Distributor)
admin.site.register(Retailer)
admin.site.register(Product)
admin.site.register(Payment_Details)
admin.site.register(Order_Details)
admin.site.register(Order_Items)
