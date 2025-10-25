# 📝 To-Do List Application

A simple and elegant **To-Do List Web Application** built using **React.js** (Frontend) and **Laravel (PHP)** (Backend).  
Users can efficiently add, view, update, and manage their daily tasks through a modern and responsive interface.

---

## 🚀 Features

### 🖥️ Frontend (React.js)
- ➕ Add new tasks with **Title** and **Description**  
- ✅ Mark tasks as **Completed**
- 🔍 Filter tasks based on status  
- ⚡ Real-time UI updates after task actions  
- 💻 Fully responsive design  
- 🧭 Smooth navigation with **React Router**

### ⚙️ Backend (Laravel)
- 🧱 **RESTful API** for managing tasks (`GET`, `POST`, `PATCH`)  
- 🗄️ **MySQL database** integration  
- 🌐 **CORS** enabled for frontend-backend communication  
- 🔐 Input **validation** and **error handling**  
- 🚀 Scalable and easy to extend API

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js, CSS (Custom Styling) |
| **Backend** | Laravel (PHP Framework) |
| **Database** | MySQL |
| **API Communication** | Fetch API (JSON) |

---

## 🛠️ Installation Guide

### 🧮 1️⃣ Backend (Laravel)
```
# Navigate to the backend folder
cd backend

# Install PHP dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Run database migrations
php artisan migrate

# Start Laravel development server
php artisan serve
```
---

###  ⚛️ 2️⃣ Frontend (React.js)
```bash
# Navigate to the frontend folder
cd frontend

# Install node modules
npm install

# Start React development server
npm start
```
---

### 📁 Folder Structure

```bash
project-root/
├── backend/                 # Laravel Backend
│   ├── app/
│   ├── routes/
│   ├── database/
│   └── ...
│
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.js
│   │   └── ...
│   └── package.json
│
└── README.md
```
---

### ▶️ Run the Project

npm start

---

## 📦 API Endpoints

| **Method** | **Endpoint** | **Description** |
|-------------|--------------|-----------------|
| `GET` | `/api/tasks` | Get all tasks |
| `POST` | `/api/tasks` | Add a new task |
| `PATCH` | `/api/tasks/{id}` | Update task (mark as complete/incomplete) |

---

## 👨‍💻 Author

**Developed by:** Kithru Viduranga  
