from rest_framework import serializers
from .models import User, Product, Order_Items, Payment_Details, Order_Details


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        user = User(username=validated_data['username'],email=validated_data['email'],password=validated_data['email'])
        user.set_password(validated_data['password'])
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
