# 🏙️ UrbanAlert API

UrbanAlert is a platform designed for citizens to quickly report urban incidents (potholes, fires, leaks), enabling efficient management of reports through intelligent prioritization.

## 🛠️ Technologies Used

* **Node.js** & **Express** (Backend)
* **MongoDB** & **Mongoose** (Database)
* **JSON Web Token (JWT)** (Security)
* **Bcryptjs** (Password Encryption)

## 🚀 Installation Guide

1. Clone the repository.

2. Install dependencies:
   ```bash
   npm install

Set up your environment variables:
Create a .env file based on .env.template
Add your MONGO_URI and JWT_SECRET

Start the server:Bashnode index.js

🛣️ Main Endpoints
Authentication (/api/auth)

POST /register → Register new users
POST /login → Login and obtain JWT Token

Reports (/api/reportes)

GET /getAllReports → Get all reports (Requires Token)
POST /createReports → Create a new report (Requires Token)
