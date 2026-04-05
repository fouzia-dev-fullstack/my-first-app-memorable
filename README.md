# my-first-app-memorable
My first web app built with React and Node.js

# JWT Authentication App 
A full-stack authentication system built with React, Node.js, Express, MongoDB and JWT.

## Features
- User Registration
- User Login
- JWT Token Authentication
- Password Hashing with bcrypt
- Protected Routes
- MongoDB Database

## Tech Stack
**Frontend:** React
**Backend:** Node.js, Express
**Database:** MongoDB
**Authentication:** JWT, bcrypt

## How to Run

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
