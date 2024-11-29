from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.get_todos),
    path('create/', views.create_todo),
    path('update/<int:pk>', views.update_todo),
    path('delete/<int:pk>', views.delete_todo)
]