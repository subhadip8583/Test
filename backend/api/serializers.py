from rest_framework import serializers

class BookSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    author = serializers.CharField()

class OrderSerializer(serializers.Serializer):
    book_id = serializers.IntegerField()
    customer_name = serializers.CharField()
