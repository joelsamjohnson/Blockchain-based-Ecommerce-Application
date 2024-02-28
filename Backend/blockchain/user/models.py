from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from home.models import Account


def default_ethereum_address():
    return "0x000000000000000000000000000000000000000000"

class Consumer(models.Model):
    email = models.EmailField(max_length=60, unique=True)
    name = models.CharField(max_length=30, unique=True)
    place = models.CharField(max_length=30)
    ethereum_address = models.CharField(max_length=42, unique=True,default=default_ethereum_address)

    def __str__(self):
        return self.username

    def set_password(self, raw_password):
        self.password = raw_password

    def check_password(self, raw_password):
        return raw_password==self.password


class Manufacturer(models.Model):
    email = models.EmailField(max_length=60, unique=True)
    name = models.CharField(max_length=30, unique=True)
    place = models.CharField(max_length=30)
    ethereum_address = models.CharField(max_length=42, unique=True,default=default_ethereum_address)

    def __str__(self):
        return self.name


class Distributor(models.Model):
    email = models.EmailField(max_length=60, unique=True)
    name = models.CharField(max_length=30, unique=True)
    place = models.CharField(max_length=30)
    ethereum_address = models.CharField(max_length=42, unique=True,default=default_ethereum_address)

    def __str__(self):
        return self.name


class Retailer(models.Model):
    email = models.EmailField(max_length=60, unique=True)
    name = models.CharField(max_length=30, unique=True)
    place = models.CharField(max_length=30)
    ethereum_address = models.CharField(max_length=42, unique=True,default=default_ethereum_address)

    def __str__(self):
        return self.name


def get_product_image_filepath(self, filename):
    return 'product_images/' + str(self.pk) + '/product_image.png'


class Product(models.Model):
    STATUS = [('I','Init'),
        ('M','Manufacture'),
        ('D','Distribution'),
        ('R','Retail'),
        ('S','sold')]
    name = models.CharField(max_length=60)
    price = models.FloatField()
    description = models.CharField(max_length=200, null=True)
    image = models.ImageField(max_length=255, upload_to=get_product_image_filepath, null=True, blank=True)
    warranty_period = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    m_id = models.ForeignKey(Manufacturer, on_delete=models.CASCADE, default=3)
    d_id = models.ForeignKey(Distributor, on_delete=models.CASCADE, default=3)
    r_id = models.ForeignKey(Retailer, on_delete=models.CASCADE, default=3)
    status = models.CharField(max_length=1,choices = STATUS, default='I')


    def get_product_image_filename(self):
        substring = f'product_images/{self.pk}/'
        if substring in self.image:
            result = self.image[str(self.image).index(substring):]
        else:
            result = None  # or some other default value or action

        return result

    def __str__(self):
        return self.name


class Order_Items(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    user_id = models.ForeignKey(Consumer, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    order_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user_id)


class Payment_Details(models.Model):
    order_id = models.ForeignKey(Order_Items, on_delete=models.CASCADE)
    total_amount = models.FloatField()
    status = models.BooleanField(default=True)
    payment_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.status)


class Order_Details(models.Model):
    payment_id = models.ForeignKey(Payment_Details, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.payment_id)
