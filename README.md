# Django REST Framework + React — Product Management System

A full-stack **Product Management System** built using **Django REST Framework** for the backend API and **React** for the frontend.

## 🚀 Project Overview

This project demonstrates how to build a full-stack web application where product data is managed through a Django REST API and displayed dynamically in a React frontend.

The React application communicates with the Django REST Framework API to retrieve and manage product information.

## 🛠️ Technologies Used

### Backend
- Python
- Django
- Django REST Framework
- SQLite

### Frontend
- React
- JavaScript
- HTML
- CSS
- Axios
- Vite

### Tools
- Git
- GitHub
- Visual Studio Code

## ✨ Features

- Add products
- View products
- Update products
- Delete products
- REST API integration
- React frontend
- Django REST Framework backend
- Product data loaded dynamically from the Django API

## 📁 Project Structure

```text
Product-Management-System/
│
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── foodapi/
│   └── ...
│
├── frontend/
│   ├── package.json
│   ├── src/
│   └── ...
│
└── README.md
```

## ⚙️ Backend Setup

Open a terminal and go to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment on Windows:

```bash
venv\Scripts\activate
```

Install the required packages:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Start the Django server:

```bash
python manage.py runserver
```

The backend will run at:

```text
http://127.0.0.1:8000/
```

## 💻 Frontend Setup

Open another terminal and go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173/
```

## 🔗 API Integration

The React frontend communicates with the Django REST Framework backend through REST API endpoints.

The product data is fetched from the Django API and displayed in the React application.

Example:

```text
React Frontend
      │
      │ HTTP Request
      ▼
Django REST API
      │
      ▼
Database
      │
      ▼
Django REST API
      │
      │ JSON Response
      ▼
React Frontend
```

## 📌 Future Improvements

- User authentication
- Product search
- Product categories
- Product images
- Pagination
- Form validation
- Product filtering
- Deployment to a cloud platform

## 👨‍💻 Author

**Hemanth Kumar L.V.**

GitHub: [HemanthKumarLV](https://github.com/HemanthKumarLV)

---

⭐ If you find this project useful, consider giving the repository a star.
