# fara.ai Frontend Challenge

Frontend application built with **React 19** and **Vite**.  
Provides user authentication, role-based access (admin / user), retailer selection, and revenue analysis display.

---

## Tech Stack

- React 19
- Vite
- React Router v7
- Axios
- JWT Authentication
- Custom hooks (useAuthToken)
- CSS Modules
- Responsive UI

---

## Features

- User login with JWT
- Role-based access control (admin / user)
- Retailer selection for admin users
- Display analysis per retailer
- Logout functionality
- Responsive UI

---

## Architecture & Flow

- Users authenticate via JWT stored in `localStorage`
- Regular users automatically see analysis for their assigned retailer
- Admin users must select a retailer first, then see the analysis
- API calls are handled via Axios instances
- Component-based architecture with hooks for data fetching
- Global error handling for API requests

---

## Pages

### Login Page

- Users can log in using email and password
- JWT token is stored in `localStorage`
- Regular users are redirected to Analysis page
- Admin users are redirected to Retailer Selection page

### Retailer Selection (Admin only)

- Fetches available retailers via `/api/retailers`
- Admin must select a retailer to view analysis
- Includes logout button

### Analysis Page

- Fetches analysis via `/api/analysis` (or `/api/analysis?retailerKey=XYZ` for admins)
- Displays monthly revenue per retailer
- Admin can change retailer via `Change retailer` button
- Includes logout button

### NotFound Page

- Displayed when a user navigates to a non-existent route
- Shows a friendly "Page not found" message
- Includes button-navigation to home page

---

## Test Users / Demo Accounts

You can use the following credentials to log in:

| Role       | Email           | Password  |
| ---------- | --------------- | --------- |
| Admin      | admin@test.com  | admin     |
| Retailer A | test-a@test.com | retailera |
| Retailer B | test-b@test.com | retailerb |

- Admin users are redirected to Retailer Selection page
- Regular users are redirected directly to Analysis page for their assigned retailer

---

## API Integration

All API requests use a configured Axios instance (`backendInstance`) which automatically includes the JWT token:

```javascript
import { backendInstance } from "./src/shared/api/backendInstance.js";

export const getAnalysisApi = async (retailerKey) => {
  const params = retailerKey ? { retailerKey } : {};
  const { data } = await backendInstance.get("/api/analysis", { params });
  return data;
};
```

---

## Setup & Run

### 1. Install dependencies

```bash
npm install
```

### 2. Environment Variables

The project requires the following environment variables.
They are provided in the .env.local file included in the project archive.

### 3. Run the development server

```bash
npm run dev
```
