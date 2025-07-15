# 📚 React Native + Django REST API Bookstore App

This project is a simple **full-stack bookstore app** built using:

- 📱 React Native (Frontend)
- 🐍 Django REST Framework (Backend API)
- ☁️ Hosted on [Render](https://render.com)

-----------------------

## 🔗 Live API URL

My API is live at: https://django-backend-n2b5.onrender.com


------------------------

## 📦 Backend API Endpoints

1. GET:https://django-backend-n2b5.onrender.com/books/
2. POst:https://django-backend-n2b5.onrender.com/order/

----------------------

### 📚 GET: https://django-backend-n2b5.onrender.com/books/

Returns a list of all available books.

#### Example Response:
```json
[
  {
    "id": 1,
    "title": "Atomic Habits",
    "author": "James Clear"
  },
  {
    "id": 2,
    "title": "The Alchemist",
    "author": "Paulo Coelho"
  },
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell"
  }
]

-----------------------------
### 📚 POST: https://django-backend-n2b5.onrender.com/order/

Returns a list of which include book id and success message that book was orderd successfully.

Request Body:{
  "book_id": 1,
  "customer_Name": "Subhadip"
}

#### Example Response:
{
  "message": "Order placed successfully!",
  "order": {
    "book": {
      "id": 1,
      "title": "Atomic Habits",
      "author": "James Clear"
    },
    "customer": "Subhadip"
  }
}

-----------------------------------------------------------------------

### 🎨 Frontend (React Native)

The frontend is built using **React Native** and serves as the user interface for:

- 📘 Viewing all available books
- 🛒 Ordering a selected book
- 📡 Interacting with the Django REST API

-----------------------

### 📁 Directory

The frontend code is located in the `/frontend` folder.

---

### 🚀 Getting Started

Make sure you have the React Native environment set up:  
👉 https://reactnative.dev/docs/environment-setup

Then:

```bash
cd frontend
npm install
npx react-native start
---------------------------------------
npx react-native run-android
# or, for iOS (Mac only)
npx react-native run-ios





