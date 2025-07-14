from django.urls import path
from .views import BookListView, OrderView

urlpatterns = [
    path('books/', BookListView.as_view()),
    path('order/', OrderView.as_view()),
]
