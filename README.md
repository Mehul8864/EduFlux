<div align="center">

<br/>

# 🎓 EduFlux

### A Full-Stack EdTech Platform — Learn, Teach & Grow

<br/>

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Razorpay](https://img.shields.io/badge/Payments-Razorpay-02042B?style=flat-square&logo=razorpay&logoColor=white)](https://razorpay.com/)
[![Cloudinary](https://img.shields.io/badge/Media-Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

<br/>

> EduFlux is a production-ready MERN stack ed-tech platform where **students** can discover and purchase courses, track their progress, and leave reviews — while **instructors** can create, manage, and publish rich course content with video support.

<br/>

**[🚀 Getting Started](#-getting-started)** &nbsp;·&nbsp;
**[✨ Features](#-features)** &nbsp;·&nbsp;
**[📸 Screenshots](#-screenshots)** &nbsp;·&nbsp;
**[🛠 Tech Stack](#-tech-stack)** &nbsp;·&nbsp;
**[📡 API](#-api-overview)** &nbsp;·&nbsp;
**[👤 Author](#-author)**

<br/>

</div>

---

## ✨ Features

<br/>

<table>
<tr>
<td valign="top" width="33%">

#### 👨‍🎓 &nbsp;Students
- Browse & search courses by category
- Detailed course pages with full curriculum preview
- Secure course purchase via **Razorpay**
- Video player with progress tracking
- Rate & review enrolled courses
- Manage profile, avatar & password

</td>
<td valign="top" width="33%">

#### 👨‍🏫 &nbsp;Instructors
- Create, edit & delete courses
- Add sections & video sub-sections
- Upload media via **Cloudinary**
- Instructor dashboard with earnings & student stats
- Publish / draft course toggle

</td>
<td valign="top" width="33%">

#### 🔐 &nbsp;Auth & Security
- OTP-based email verification on signup
- JWT authentication (24h expiry)
- Forgot password via secure email token
- Role-based access — Student / Instructor / Admin
- Rate limiting, Helmet & CORS protection

</td>
</tr>
</table>

---

## 📸 Screenshots

<br/>

### 🏠 Home

<img src="./EduFlux/screenshots/home 1.png" width="100%" alt="Home Page"/>

<br/>

<img src="./EduFlux/screenshots/home2.png" width="49.5%" alt="Home 2"/> &nbsp; <img src="./EduFlux/screenshots/home3.png" width="49.5%" alt="Home 3"/>

<br/>

### 🔑 Authentication

<img src="./EduFlux/screenshots/login.png" width="49.5%" alt="Login"/> &nbsp; <img src="./EduFlux/screenshots/signup.png" width="49.5%" alt="Signup"/>

<img src="./EduFlux/screenshots/forgot pass.png" width="49.5%" alt="Forgot Password"/>

<br/>

### 📚 Courses

<img src="./EduFlux/screenshots/course details1.png" width="49.5%" alt="Course Details 1"/> &nbsp; <img src="./EduFlux/screenshots/course details2.png" width="49.5%" alt="Course Details 2"/>

<img src="./EduFlux/screenshots/view course1.png" width="49.5%" alt="View Course 1"/> &nbsp; <img src="./EduFlux/screenshots/view course2.png" width="49.5%" alt="View Course 2"/>

<br/>

### 🖥 Dashboard

<img src="./EduFlux/screenshots/dashboard.png" width="49.5%" alt="Dashboard"/> &nbsp; <img src="./EduFlux/screenshots/enrolled courses.png" width="49.5%" alt="Enrolled Courses"/>

<img src="./EduFlux/screenshots/add course.png" width="49.5%" alt="Add Course"/> &nbsp; <img src="./EduFlux/screenshots/edit course.png" width="49.5%" alt="Edit Course"/>

<img src="./EduFlux/screenshots/myCourses1.png" width="49.5%" alt="My Courses"/> &nbsp; <img src="./EduFlux/screenshots/instrctor data.png" width="49.5%" alt="Instructor Dashboard"/>

<br/>

### 👤 Profile & Settings

<img src="./EduFlux/screenshots/edit profile.png" width="49.5%" alt="Edit Profile"/> &nbsp; <img src="./EduFlux/screenshots/delete account.png" width="49.5%" alt="Delete Account"/>

<br/>

### 🛒 Cart & Other

<img src="./EduFlux/screenshots/cart 1.png" width="49.5%" alt="Cart"/> &nbsp; <img src="./EduFlux/screenshots/about.png" width="49.5%" alt="About"/>

<img src="./EduFlux/screenshots/contact.png" width="49.5%" alt="Contact"/> &nbsp; <img src="./EduFlux/screenshots/404 page.png" width="49.5%" alt="404 Page"/>

---

## 🛠 Tech Stack

<br/>

| Layer | Technology |
|:---|:---|
| **Frontend** | React 18, Redux Toolkit, React Router v6, Axios |
| **Styling** | Tailwind CSS, Framer Motion, React Icons |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Authentication** | JWT, Bcrypt |
| **Media Storage** | Cloudinary (images + videos) |
| **Payments** | Razorpay |
| **Email** | Nodemailer (Gmail SMTP) |
| **Security** | Helmet, CORS, express-rate-limit |

---

## 🏗 Architecture

<br/>

<img src="./EduFlux/screenshots/Architecture Diagram.png" width="100%" alt="Architecture Diagram"/>

<br/>

| Layer | Details |
|:---|:---|
| **Frontend** | React SPA on port `3000`, communicates with backend via REST API |
| **Backend** | Express REST API on port `4000`, handles all business logic |
| **Database** | MongoDB Atlas stores users, courses, sections, progress & reviews |
| **Cloudinary** | Stores all uploaded course images and videos |
| **Razorpay** | Handles payment capture and verification |

<br/>

### Database Schema

<img src="./EduFlux/screenshots/Schema.png" width="100%" alt="Database Schema"/>

---

## 🚀 Getting Started

<br/>

### Prerequisites

- **Node.js** v18+
- **npm** v9+
- [MongoDB Atlas](https://www.mongodb.com/atlas) free account
- [Cloudinary](https://cloudinary.com) free account
- [Razorpay](https://razorpay.com) test account
- Gmail with [App Password](https://myaccount.google.com/apppasswords) enabled

<br/>

### 1 · Clone

```bash
git clone https://github.com/Mehul8864/EduFlux.git
cd EduFlux
```

### 2 · Install Dependencies

```bash
# Frontend
npm install

# Backend
cd server && npm install
```

### 3 · Environment Variables

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

# Email
MAIL_HOST=smtp.gmail.com
MAIL_USER=mehul79067@gmail.com
MAIL_PASS=your_gmail_app_password

# Frontend
FRONTEND_URL=http://localhost:3000
```

Create **`.env`** in the `EduFlux/` folder:

```env
REACT_APP_BASE_URL=http://localhost:4000/api/v1
```

### 4 · Run

```bash
# Both frontend + backend together (from EduFlux/ folder)
npm run dev
```

```bash
# Or separately:
cd server && npm run dev      # → http://localhost:4000
npm start                     # → http://localhost:3000
```

---

## 📡 API Overview

All routes are prefixed with `/api/v1`

<br/>

| Method | Endpoint | Description |
|:---:|:---|:---|
| `POST` | `/auth/sendotp` | Send OTP to email |
| `POST` | `/auth/signup` | Register new user |
| `POST` | `/auth/login` | Login & receive JWT |
| `POST` | `/auth/reset-password-token` | Send password reset email |
| `POST` | `/auth/reset-password` | Reset password with token |
| `GET` | `/profile/getUserDetails` | Get logged-in user details |
| `GET` | `/profile/getEnrolledCourses` | Get student's enrolled courses |
| `GET` | `/profile/instructorDashboard` | Get instructor stats |
| `GET` | `/course/getAllCourses` | List all published courses |
| `POST` | `/course/getCourseDetails` | Get single course details |
| `POST` | `/course/createCourse` | Create a new course |
| `PUT` | `/course/editCourse` | Edit an existing course |
| `POST` | `/course/addSection` | Add section to course |
| `POST` | `/course/addSubSection` | Add video sub-section |
| `GET` | `/course/showAllCategories` | List all categories |
| `POST` | `/course/createRating` | Submit a course review |
| `GET` | `/course/getReviews` | Get all reviews |
| `POST` | `/payment/capturePayment` | Initiate Razorpay order |
| `POST` | `/payment/verifyPayment` | Verify payment & enroll student |
| `POST` | `/reach/contact` | Submit contact form |

---

## 📁 Project Structure

```
EduFlux/
│
├── public/                        # Static HTML entry point
│
├── src/
│   ├── assets/                    # Images, videos, logos
│   ├── components/
│   │   ├── common/                # Navbar, Footer, ReviewSlider, Spinner
│   │   ├── core/
│   │   │   ├── Auth/              # Login, Signup, OTP, Profile Dropdown
│   │   │   ├── Dashboard/         # Cart, Settings, MyCourses, AddCourse
│   │   │   ├── HomePage/          # Hero, CodeBlocks, Timeline, Instructor
│   │   │   └── ViewCourse/        # Video player, sidebar, progress
│   │   └── ContactPage/
│   ├── data/                      # Static navbar & footer link data
│   ├── hooks/                     # Custom React hooks
│   ├── pages/                     # Home, Login, Signup, Catalog, Dashboard...
│   ├── reducer/                   # Redux slices — auth, cart, course, profile
│   ├── services/                  # Axios API calls & endpoint constants
│   └── utils/                     # Constants, helper functions
│
└── server/
    ├── config/                    # DB, Cloudinary, Razorpay connections
    ├── controllers/               # Auth, Course, Profile, Payments, etc.
    ├── middlewares/               # JWT auth & role middleware
    ├── models/                    # Mongoose schemas
    ├── routes/                    # Express route definitions
    ├── mail/templates/            # HTML email templates
    └── utils/                     # mailSender, imageUploader, secToDuration
```

---

## 👤 Author

<br/>

<div align="center">

**Mehul Gupta**

<br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mehul%20Gupta-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mehul-gupta-b38a2b330/)
&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-Mehul8864-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mehul8864)

<br/>

---

<sub>Made with ❤️ by <a href="https://github.com/Mehul8864">Mehul Gupta</a> &nbsp;·&nbsp; © 2025 EduFlux</sub>

</div>
