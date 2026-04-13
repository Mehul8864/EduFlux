<div align="center">

<img src="./src/assets/Logo/Logo-Full-Light.png" alt="EduFlux Logo" width="220" />

<br/>
<br/>

# EduFlux

**A modern, full-stack EdTech platform — learn, teach, and grow.**

<br/>

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Razorpay](https://img.shields.io/badge/Payments-Razorpay-02042B?style=flat-square&logo=razorpay&logoColor=white)](https://razorpay.com/)
[![Cloudinary](https://img.shields.io/badge/Media-Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)](https://cloudinary.com/)

<br/>

[🚀 Getting Started](#-getting-started) &nbsp;•&nbsp; [✨ Features](#-features) &nbsp;•&nbsp; [📸 Screenshots](#-screenshots) &nbsp;•&nbsp; [🛠 Tech Stack](#-tech-stack) &nbsp;•&nbsp; [📡 API](#-api-overview) &nbsp;•&nbsp; [👤 Author](#-author)

<br/>

</div>

---

## 📌 About

**EduFlux** is a fully functional ed-tech web application built with the **MERN stack**. It enables students to discover and purchase courses, track their learning progress, and leave reviews — while instructors can create, manage, and publish their own course content with rich media support.

---

## ✨ Features

<table>
<tr>
<td width="33%" valign="top">

### 👨‍🎓 Students
- Browse courses by category
- Detailed course pages with curriculum preview
- Secure payments via **Razorpay**
- Track enrolled courses & video progress
- Rate and review courses
- Edit profile & display picture

</td>
<td width="33%" valign="top">

### 👨‍🏫 Instructors
- Create, edit & delete courses
- Add sections & video sub-sections
- Upload media to **Cloudinary**
- Instructor dashboard with stats
- Publish / draft course control

</td>
<td width="33%" valign="top">

### 🔐 Auth & Security
- OTP email verification on signup
- JWT auth with 24h expiry
- Forgot password via email token
- Role-based access control
- Rate limiting & Helmet headers

</td>
</tr>
</table>

---

## 📸 Screenshots

### 🏠 Home Page

<img src="./screenshots/home 1.png" width="100%" />
<img src="./screenshots/home2.png" width="49%" /> <img src="./screenshots/home3.png" width="49%" />

<br/>

### 🔑 Authentication

<img src="./screenshots/login.png" width="49%" /> <img src="./screenshots/signup.png" width="49%" />

<br/>

### 📚 Courses

<img src="./screenshots/course details1.png" width="49%" /> <img src="./screenshots/course details2.png" width="49%" />
<img src="./screenshots/view course1.png" width="49%" /> <img src="./screenshots/view course2.png" width="49%" />

<br/>

### 🖥 Dashboard

<img src="./screenshots/dashboard.png" width="49%" /> <img src="./screenshots/enrolled courses.png" width="49%" />
<img src="./screenshots/add course.png" width="49%" /> <img src="./screenshots/edit course.png" width="49%" />
<img src="./screenshots/myCourses1.png" width="49%" /> <img src="./screenshots/instrctor data.png" width="49%" />

<br/>

### 👤 Profile & Settings

<img src="./screenshots/edit profile.png" width="49%" /> <img src="./screenshots/delete account.png" width="49%" />

<br/>

### 🛒 Cart & Other Pages

<img src="./screenshots/cart 1.png" width="49%" /> <img src="./screenshots/about.png" width="49%" />
<img src="./screenshots/contact.png" width="49%" /> <img src="./screenshots/404 page.png" width="49%" />

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Redux Toolkit, React Router v6, Axios |
| **Styling** | Tailwind CSS, Framer Motion, React Icons |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JSON Web Tokens (JWT), Bcrypt |
| **File & Media** | Cloudinary (images + videos) |
| **Payments** | Razorpay |
| **Email** | Nodemailer via Gmail SMTP |
| **Security** | Helmet, CORS, express-rate-limit |

---

## 🏗 Architecture

<img src="./screenshots/Architecture Diagram.png" width="100%" />

- **Frontend** — React SPA on port `3000`, talks to backend via REST API
- **Backend** — Express API on port `4000`, handles all business logic
- **Database** — MongoDB Atlas stores users, courses, progress & reviews
- **Cloudinary** — stores all uploaded course images and videos
- **Razorpay** — handles payment capture and verification

### Database Schema

<img src="./screenshots/Schema.png" width="100%" />

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (free)
- [Cloudinary](https://cloudinary.com) account (free)
- [Razorpay](https://razorpay.com) test account
- Gmail with [App Password](https://myaccount.google.com/apppasswords) enabled

---

### 1 — Clone the repository

```bash
git clone https://github.com/Mehul8864/EduFlux.git
cd EduFlux
```

### 2 — Install dependencies

```bash
# Frontend
npm install

# Backend
cd server && npm install
```

### 3 — Set up environment variables

Create **`server/.env`**:

```env
PORT=4000
NODE_ENV=development

# MongoDB
MONGODB_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/eduflux

# JWT
JWT_SECRET=your_secret_key_here

# Cloudinary
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
FOLDER_NAME=EduFlux

# Razorpay
RAZORPAY_KEY=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret

# Email (Gmail)
MAIL_HOST=smtp.gmail.com
MAIL_USER=mehul79067@gmail.com
MAIL_PASS=your_gmail_app_password

# Frontend
FRONTEND_URL=http://localhost:3000
```

Create **`.env`** in the project root:

```env
REACT_APP_BASE_URL=http://localhost:4000/api/v1
```

### 4 — Run the project

```bash
# Runs both frontend + backend together
npm run dev
```

Or separately:

```bash
# Backend  →  http://localhost:4000
cd server && npm run dev

# Frontend  →  http://localhost:3000
npm start
```

---

## 📡 API Overview

All routes are prefixed with `/api/v1`

| Route | Description |
|---|---|
| `POST /auth/sendotp` | Send OTP to email |
| `POST /auth/signup` | Register new user |
| `POST /auth/login` | Login and get JWT |
| `POST /auth/reset-password-token` | Send password reset email |
| `POST /auth/reset-password` | Reset password with token |
| `GET /profile/getUserDetails` | Get logged-in user details |
| `GET /profile/getEnrolledCourses` | Get student's enrolled courses |
| `GET /profile/instructorDashboard` | Get instructor stats |
| `GET /course/getAllCourses` | List all published courses |
| `POST /course/getCourseDetails` | Get single course details |
| `POST /course/createCourse` | Create a new course |
| `POST /course/addSection` | Add section to course |
| `POST /course/addSubSection` | Add video sub-section |
| `POST /payment/capturePayment` | Initiate Razorpay order |
| `POST /payment/verifyPayment` | Verify payment & enroll |
| `POST /reach/contact` | Submit contact form |

---

## 📁 Project Structure

```
EduFlux/
├── public/
├── src/
│   ├── assets/              # Images, videos, logos
│   ├── components/
│   │   ├── common/          # Navbar, Footer, ReviewSlider
│   │   ├── core/            # Auth, Dashboard, HomePage, ViewCourse
│   │   └── ContactPage/
│   ├── data/                # Navbar links, footer links
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Home, Login, Signup, Catalog, Dashboard...
│   ├── reducer/             # Redux slices (auth, cart, course, profile)
│   ├── services/            # API operations & endpoint constants
│   └── utils/               # Constants, helper functions
│
└── server/
    ├── config/              # Database, Cloudinary, Razorpay setup
    ├── controllers/         # Auth, Course, Profile, Payments, etc.
    ├── middlewares/         # JWT auth middleware
    ├── models/              # Mongoose schemas
    ├── routes/              # Express route definitions
    ├── mail/templates/      # HTML email templates
    └── utils/               # mailSender, imageUploader, secToDuration
```

---

## 👤 Author

<div align="center">

<br/>

**Mehul Gupta**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mehul%20Gupta-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mehul-gupta-b38a2b330/)
[![GitHub](https://img.shields.io/badge/GitHub-Mehul8864-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mehul8864)

<br/>

---

Made with ❤️ by [Mehul Gupta](https://github.com/Mehul8864) &nbsp;•&nbsp; © 2025 EduFlux

</div>
