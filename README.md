# JWT Authentication App 

A full-stack authentication system built with React, Node.js, Express, MongoDB and JWT.

##  Live Demo
[https://my-first-app-memorable.vercel.app/](https://my-first-app-memorable.vercel.app/)

## Features
- User Registration
- User Login
- JWT Token Authentication
- Password Hashing with bcrypt
- Protected Routes
- MongoDB Database
- Show/Hide Password Toggle
- Error messages with color feedback

## Tech Stack
**Frontend:** React, CSS
**Backend:** Node.js, Express
**Database:** MongoDB Atlas
**Authentication:** JWT, bcrypt
**Deployment:** Vercel (Frontend), Railway (Backend)

## How to Run Locally

### Backend
```bash
cd backend
npm install
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and get JWT token |
| GET | /api/protected | Protected route (requires token) |

## Author
Made with ❤️ while learning full-stack development