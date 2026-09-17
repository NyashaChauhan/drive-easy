# DriveEasy

A full-stack car rental management system that provides a complete platform for customers and administrators to manage cars, rentals, payments, and customer accounts.

## Overview

DriveEasy combines a responsive landing page, a React-based management dashboard, and a Node.js/Express REST API backed by MySQL.

The system supports user authentication, car availability, rental management, customer rental history, payment records, and revenue analytics.

## Features

### Customer Features

- User registration and login
- JWT-based authentication
- Browse available cars
- View car details
- Create and manage rentals
- View rental history
- Cancel and complete rentals
- View account information

### Admin Features

- Dashboard for managing the rental system
- Monitor active rentals
- Manage rental operations
- Access customer and payment information
- View revenue analytics
- Role-based access control

### Landing Page

- Responsive car rental landing page
- Fleet showcase
- How It Works section
- Loyalty and rewards section
- Testimonials
- Call-to-action sections
- Responsive navigation and UI components

## Tech Stack

### Frontend

- React
- JavaScript
- Axios
- React Router

### Backend

- Node.js
- Express.js
- REST API
- JWT
- bcryptjs

### Database

- MySQL
- MySQL2

### Landing Page

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components

## Project Structure

```text
drive-easy/
│
├── frontend/              # React dashboard application
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── api/
│   └── package.json
│
├── backend/               # Node.js/Express REST API
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── db/
│   └── package.json
│
├── landing-page/          # Public-facing landing page
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── components/ui/
│   └── package.json
│
└── README.md
```

## Backend API

The backend exposes REST endpoints for:

- Authentication
- Cars
- Customers
- Rentals
- Payments
- Revenue analytics

### Rental Operations

The rental API supports:

- Creating rentals
- Viewing active rentals
- Viewing rentals by customer
- Viewing individual rentals
- Completing rentals
- Cancelling rentals
- Retrieving revenue analytics

Rental creation, completion, and cancellation use MySQL stored procedures.

## Authentication

DriveEasy uses JWT-based authentication to protect application routes.

Passwords are hashed using bcryptjs before being stored in the database.

Protected API requests require a valid Bearer token.

The application also includes middleware for restricting admin-only operations.

## Database

The backend connects to MySQL using a connection pool.

Database configuration is supplied through environment variables:

```env
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
PORT=
```

Do not commit actual credentials or secret keys to the repository.

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd drive-easy
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file and configure the required database and JWT variables.

Then start the backend:

```bash
npm start
```

The API runs on:

```text
http://localhost:3000
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm start
```

### 4. Landing Page Setup

Open another terminal:

```bash
cd landing-page
npm install
npm run dev
```

## Architecture

```text
                    DriveEasy
                        │
          ┌─────────────┴─────────────┐
          │                           │
    Landing Page                 React Dashboard
          │                           │
          │                       Axios / REST
          │                           │
          └──────────────┬────────────┘
                         │
                  Node.js + Express
                         │
              ┌──────────┴──────────┐
              │                     │
       Authentication          Business Logic
       JWT + bcrypt             Controllers
              │                     │
              └──────────┬──────────┘
                         │
                       MySQL
                         │
              ┌──────────┴──────────┐
              │                     │
          Database             Stored Procedures
           Views
```

## Project Components

| Component | Purpose |
|---|---|
| `landing-page` | Public-facing website for the car rental platform |
| `frontend` | Customer and administrative dashboard |
| `backend` | REST API and application business logic |
| `MySQL` | Persistent data storage |

## Security

- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- Admin-only authorization middleware
- Environment variables for sensitive configuration
- CORS configuration for frontend-backend communication

## Future Improvements

- Online payment gateway integration
- Improved role-based permissions
- Automated email notifications
- Advanced analytics and reporting
- Deployment and cloud database integration

## License

This project is developed for academic and portfolio purposes.
