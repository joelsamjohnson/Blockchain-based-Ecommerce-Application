from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.permissions import AllowAny
from .models import User
from .serializers import *
