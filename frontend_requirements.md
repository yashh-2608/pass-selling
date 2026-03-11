# Frontend Integration Guide

This document outlines the required interactions between the Frontend and the Backend API.

## Base URL
Assuming the backend runs on `http://localhost:5000` (or `PORT` from env).
API Prefix: `/api`

## Authentication

### 1. User Registration
- **Endpoint:** `POST /api/auth/signup`
- **Access:** Public
- **Description:** Registers a new user.
- **Request Body (JSON):**
  ```json
  {
    "name": "User Name",      // Required
    "email": "user@example.com", // Required, unique
    "password": "securePassword123", // Required
    "role": "user"            // Optional, defaults to "user" (or "admin")
  }
  ```
- **Success Response (201 Created):**
  ```json
  {
    "_id": "user_id_string",
    "name": "User Name",
    "email": "user@example.com",
    "role": "user",
    "token": "jwt_token_string"
  }
  ```
- **Error Response (400 Bad Request):**
  ```json
  {
    "message": "User already exists" // or "Please add all fields"
  }
  ```

### 2. User Login
- **Endpoint:** `POST /api/auth/login`
- **Access:** Public
- **Description:** Authenticates a user and returns a token.
- **Request Body (JSON):**
  ```json
  {
    "email": "user@example.com", // Required
    "password": "securePassword123" // Required
  }
  ```
- **Success Response (200 OK):**
  ```json
  {
    "_id": "user_id_string",
    "name": "User Name",
    "email": "user@example.com",
    "role": "user",
    "token": "jwt_token_string"
  }
  ```
- **Error Response (401 Unauthorized):**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## Authentication Handling (Crucial)

1.  **Token Storage:**
    - Upon successful `signup` or `login`, the backend returns a `token` (JWT).
    - The Frontend **MUST** store this token (e.g., in `localStorage`, `sessionStorage`, or `cookies`).

2.  **Protected Routes:**
    - For any future endpoints that require authentication (e.g., creating a listing, viewing profile), the Frontend **MUST** send this token in the `Authorization` header.
    - **Header Format:**
      ```
      Authorization: Bearer <your_token_here>
      ```

## Error Handling
- The backend returns errors in a consistent JSON format:
  ```json
  {
    "message": "Error description here",
    "stack": "Error stack trace (only in development mode)"
  }
  ```
- The Frontend should display the `message` field to the user in toast notifications or alert boxes.

## Future Requirements (To be implemented by Frontend)
- **Role-Based Access:** The UI should adapt based on the `role` ('user' vs 'admin') returned in the login response.
- **Redirects:**
    - After `signup`, automatically log the user in (token is provided) and redirect to the dashboard/home.
    - After `login`, redirect to the dashboard/home.
