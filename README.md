# 🚖 GoRide – Ride Management System

A **full-stack ride booking platform** similar to Uber or Pathao, built with **TypeScript, React, Redux Toolkit, RTK Query, Node.js, and MongoDB**. GoRide provides role-based dashboards for **Riders, Drivers, and Admins**, along with a responsive, production-grade frontend experience.

---

## 🌐 Live Demo

- **Frontend:** [l2-a5-frontend.vercel.app](https://l2-a5-frontend.vercel.app) 
- **Backend:** [Insert Backend Deployment URL](https://a-5-gamma.vercel.app/api) 

---

## 🛠 Technology Stack

- **Frontend:** TypeScript, React.js, Redux Toolkit, RTK Query, React Router, Tailwind CSS, Shadcn UI, Origin UI  
- **Backend:** TypeScript, Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, bcrypt, Cloudinary, Zod, Redis
 
- **Optional Enhancements:** Recharts, react-hot-toast  
- **Map & Location:** Leaflet, Geolocation API  
- **Notifications:** EmailJS, Twilio, WhatsApp Web API  

---

## 📌 Features

### **1. Public Landing Pages**
- Home with Hero Banner, How-it-works, Services, Testimonials, and Call-to-Actions  
- About Us – Company mission, background, and team profiles  
- Features – Detailed breakdown for Rider, Driver, and Admin  
- Contact – Validated inquiry form  
- FAQ – Searchable questions  

### **2. Authentication & Authorization**
- Role-based registration and login (Rider, Driver, Admin)  
- JWT-based persistent authentication  
- Blocked/Suspended user handling  
- Offline driver mode with limited feature access  

### **3. Rider Features**
- Request rides with pickup/destination & fare estimation  
- Ride history with pagination, filters (date, fare, status)  
- Ride details with map route, timestamps, driver info  
- Profile management (Name, Phone, Password)  
- Emergency/SOS button for live location alerts  

### **4. Driver Features**
- Online/Offline availability toggle  
- Accept/Reject incoming ride requests  
- Active ride management & status updates  
- Earnings dashboard with charts  
- Ride history with filters  
- Profile management (Vehicle info, Contact, Password)  

### **5. Admin Features**
- Manage users: approve, block/unblock, search, and filter  
- Ride oversight with advanced filtering  
- Analytics dashboard: ride volume, revenue, driver activity  
- Profile management and password updates  

### **6. General UI/UX**
- Fully responsive design across all devices  
- Skeleton loaders, lazy-loading, interactive elements  
- Accessible and semantic HTML components  
- Role-based navigation with dropdown menus  
- Error handling with clear messages and toast notifications  

---

## 🚀 Setup Instructions

### **Frontend**
```bash
git clone https://github.com/mostaryjahan/GoRide-frontend
cd L2-A5-frontend
bun add
npm dev
```
### **Backend**
```bash
git clone https://github.com/mostaryjahan/Ride-booking-system-backend.git
cd Ride-booking-system-backend
npm install
npm run dev
```


 #### Links

- GitHub Frontend: [Frontend Repo URL](https://github.com/mostaryjahan/GoRide-frontend)

- GitHub Backend: [Backend Repo URL](https://github.com/mostaryjahan/Ride-booking-system-backend.git)

