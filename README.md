# 📝 To-Do List Application

A simple and elegant **To-Do List Web Application** built using **React.js (Frontend)** and **Laravel (Backend)**.  
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
- 🌐 **CORS** enabled for frontend–backend communication  
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
| **Containerization** | Docker & Docker Compose |

---

## 🛠️ Installation (Using Docker)

### 🧱 Prerequisites  
Before starting, make sure you have the following installed on your system:
- [Docker](https://www.docker.com/get-started)  
- [Docker Compose](https://docs.docker.com/compose/install/)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Kithru/To-do-list.git
cd todo-list-app
```

### 2️⃣ Build and Run Containers

```bash
docker-compose build
docker-compose up -d
```

### 3️⃣ Run Laravel Migrations

```bash
docker exec -it laravel-backend php artisan migrate
```

### 4️⃣ Access the Applications

| Service | URL | Description |
|----------|-----|-------------|
| Laravel Backend | http://localhost:8000 | Laravel API |
| React Frontend | http://localhost:3000 | React Interface |
| phpMyAdmin | http://localhost:8081 | Database Management |

---

## 📁 Folder Structure

```
project-root/
├── backend/                 # Laravel Backend
│   ├── app/
│   ├── routes/
│   ├── database/
│   ├── Dockerfile
│   └── ...
│
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.js
│   │   └── ...
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

## 📦 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/tasks` | Fetch all tasks |
| `POST` | `/api/tasks` | Create a new task |
| `PATCH` | `/api/tasks/{id}` | Update a task (mark complete/incomplete) |

---

## ▶️ Local Development (Without Docker)

If you want to run locally:

### Backend
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

## 👨‍💻 Author

**Developed by:** [Kithru Viduranga](https://github.com/Kithru)
