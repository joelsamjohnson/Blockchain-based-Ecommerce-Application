from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consumer
        fields = '__all__'


class ManufacturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufacturer
        fields = ('name','place', 'ethereum_address', 'email')

    def create(self, validated_data):
        user = Manufacturer(
            name=validated_data['name'],
            place=validated_data['place'],
            ethereum_address=validated_data['ethereum_address'],
            email=validated_data['email'],

        )
        user.save()
        return user

class DistributorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Distributor
        fields = ('name','place', 'ethereum_address', 'email')

    def create(self, validated_data):
        user = Distributor(
            name=validated_data['name'],
            place=validated_data['place'],
            ethereum_address=validated_data['ethereum_address'],
            email=validated_data['email'],

        )
        user.save()
        return user

class RetailerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Retailer
        fields = ('name','place', 'ethereum_address', 'email')

    def create(self, validated_data):
        user = Retailer(
            name=validated_data['name'],
            place=validated_data['place'],
            ethereum_address=validated_data['ethereum_address'],
            email=validated_data['email'],

        )
        user.save()
        return user

class ConsumerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consumer
        fields = ('name','place', 'ethereum_address', 'email')

    def create(self, validated_data):
        user = Consumer(
            name=validated_data['name'],
            place=validated_data['place'],
            ethereum_address=validated_data['ethereum_address'],
            email=validated_data['email'],

        )
        user.save()
        return user                

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class Order_ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_Items
        fields = '__all__'


class Payment_DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment_Details
        fields = '__all__'


class Order_DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_Details
        fields = '__all__'
