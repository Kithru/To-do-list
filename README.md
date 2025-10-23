# 📝 To-Do List Application

A simple and elegant **To-Do List web application** built with a **React.js Frontend** and a **Laravel (PHP) Backend**.  
Users can add, view, and manage their daily tasks efficiently with a clean and responsive interface.

---

## 🚀 Features

### 🖥️ Frontend (React.js)
- Add new tasks with **Title** and **Description**
- Display tasks in a **user-friendly card layout**
- Filter and show only **incomplete or completed** tasks
- Responsive design for all screen sizes
- Real-time UI updates after adding or completing a task
- Smooth navigation using **React Router**

### ⚙️ Backend (Laravel)
- **RESTful API** endpoints for managing tasks  
  (`GET`, `POST`, `PATCH`, etc.)
- **MySQL** database integration
- **CORS support** for frontend communication
- **Validation** and **error handling** for secure data flow
- Easy scalability and API extension support

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React.js, CSS (Custom Styling) |
| Backend | Laravel (PHP Framework) |
| Database | MySQL |
| API Communication | Fetch API (JSON) |

---

## 🛠️ Installation Guide

### 1️⃣ Backend (Laravel)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
