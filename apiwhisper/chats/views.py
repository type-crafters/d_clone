from django.shortcuts import render
from ninja import NinjaAPI

api = NinjaAPI()

# Create your views/apis here.
@api.get("/add/{id}")
def add(request, id: int):
    json_str = {"id": id}
    return json_str 


