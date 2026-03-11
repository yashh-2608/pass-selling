# Pass Selling DApp / Platform

Welcome to the Pass-Selling application repository. This project is structured into two main applications: a Next.js frontend and a Node.js/Express backend.

## Project Structure

```text
c:\Study\Pass-selling
│
├── frontend/                 # The Next.js web application (React, Tailwind CSS)
│   ├── app/                  # Next.js App Router (pages and layouts)
│   ├── components/           # Reusable React components
│   └── package.json          # Frontend dependencies (run `npm run dev` here)
│
├── backend/                  # The Express.js server (Node.js, PostgreSQL)
│   ├── src/
│   │   ├── controllers/      # Route logic
│   │   ├── models/           # Database interactions
│   │   └── routes/           # API Endpoints
│   └── package.json          # Backend dependencies (run `npm run dev` here)
│
└── README.md                 # This file
```

## How to Run

1. **Backend Server**
   - Open a terminal and navigate to the `backend` folder.
   - Run `npm install` and then `npm run dev`.
   - The server will start (default port: 5000).

2. **Frontend Application**
   - Open a separate terminal and navigate to the `frontend` folder.
   - Run `npm install` and then `npm run dev`.
   - The Next.js application will be available at `http://localhost:3000`.

## Notice regarding old files
If you see a folder named `Pass-selling` nested inside this root directory (e.g. `Pass-selling\Pass-selling\pass-selling-app`), it is an old, redundant duplicate. You can safely delete it **after** closing your code editor to avoid "file in use" errors.
