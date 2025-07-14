from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BookSerializer, OrderSerializer

# Hardcoded book list
BOOKS = [
    {"id": 1, "title": "Atomic Habits", "author": "James Clear"},
    {"id": 2, "title": "The Alchemist", "author": "Paulo Coelho"},
    {"id": 3, "title": "1984", "author": "George Orwell"}
]

class BookListView(APIView):
    def get(self, request):
        serializer = BookSerializer(BOOKS, many=True)
        return Response(serializer.data)

class OrderView(APIView):
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            book = next((b for b in BOOKS if b["id"] == data["book_id"]), None)
            if not book:
                return Response({"error": "Book not found"}, status=status.HTTP_404_NOT_FOUND)
            return Response({
                "message": "Order placed successfully!",
                "order": {
                    "book": book,
                    "customer": data["customer_name"]
                }
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
