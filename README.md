# Fintrack – Modern Expense & Company Financial OS  
A full-stack SaaS application to track **personal expenses**, **company expenses**, **budgets**, **subscriptions**, and **financial insights** — built using **React (Vite)**, **Laravel API**, **PostgreSQL**, **Redis**, and **Docker**.

---

## 🚀 Features

### **🌐 Frontend (React + Vite)**
- Modern UI built with React & TailwindCSS  
- React Query for API caching  
- Axios API client  
- Environment-based configuration  
- Secure auth integration with Laravel (Sanctum / Token based)

---

## **🧩 Backend (Laravel API)**
- Fully modular API architecture  
- Sanctum Authentication  
- Company mode + Individual mode  
- Roles & Permissions (Admin, Manager, Employee, Accountant)  
- Expense submission & approval flow  
- Budget management  
- Subscription tracking  
- PostgreSQL database  
- Redis caching  
- Queue worker support  
- API versioning (`/api/v1/...`)

---

## **🏢 Company Expense Management**
- Create organizations  
- Add employees  
- Department-wise budgets  
- Approval workflow: Pending → Approved → Paid  
- Upload receipts  
- Department & category analytics  
- Export reports (CSV, PDF – future)

---

## **📊 Personal Expense Tracking**
- Daily expenses  
- Categories & filters  
- Subscriptions  
- Monthly budget usage  
- Export data  
- Clean visual analytics  

---

## **🧱 Tech Stack**

### **Frontend**
- React (Vite)
- React Query
- Zustand
- Axios
- TailwindCSS

### **Backend**
- Laravel 10 (API only)
- PostgreSQL
- Redis
- Sanctum Auth
- Spatie Permissions
- Horizon / Queue Workers

### **DevOps**
- Docker & Docker Compose
- Nginx (Production)
- Railway / Render / Vercel (deployment)

---

## **🐳 Docker Setup**

This project includes a complete docker setup for:

- React Frontend  
- Laravel Backend  
- PostgreSQL  
- Redis  
- Queue Worker (optional)

### **Build & start all containers**

```bash
docker-compose up --build
