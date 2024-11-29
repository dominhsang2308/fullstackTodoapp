from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Todo
from .serializer import TodoSerializer
# Create your views here.
@api_view(['GET'])
def get_todos(request):
    #Get all Todo
    todos = Todo.objects.all()[::-1]
    serializer = TodoSerializer(todos,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_todo(request):
    data = request.data
    todo = Todo.objects.create(
        todo_name = data['todo_name'],
        complete_status = data['completed']
    )
    serializer = TodoSerializer(todo,many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def update_todo(request, primaryKey):
    data = request.data
    try:
        todo = Todo.objects.get(pk=primaryKey)
    except Todo.DoesNotExist:
        return Response('Cant find todo')
    
    serializer = TodoSerializer(todo, data=data, partical = True)
    if serializer.is_valid():
        serializer.save()
        return Response('Todo Updated')
    
    return Response(serializer.errors)

@api_view(['DELETE'])
def delete_todo(request,primaryKey):
    try:
        todo = Todo.objects.get(pk=primaryKey)
    except Todo.DoesNotExist:
        return Response('cant find todo')
    todo.delete()
    return Response('Todo has been deleted')
