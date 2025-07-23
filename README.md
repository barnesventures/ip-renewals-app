# IP Renewals Group Application

An automated intellectual property renewal management system built with React, TypeScript, and Vercel.

## Features

- **Landing Page**: Professional presentation of services
- **Client Portal**: Dashboard for clients to manage their IP renewals
- **Operator Portal**: Administrative dashboard for business operators
- **Authentication**: Secure login/signup system with JWT tokens
- **Database**: PostgreSQL via Neon for data persistence
- **Storage**: Vercel Blob and Edge storage for documents

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Vercel Functions (Serverless)
- **Database**: Neon (PostgreSQL)
- **Authentication**: JWT + bcrypt
- **Deployment**: Vercel

## Setup Instructions

### 1. Prerequisites

- Node.js (v18+)
- GitHub account
- Vercel account (Hobby plan)
- Neon account

### 2. Local Development Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ip-renewals-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
   - `DATABASE_URL`: Your Neon PostgreSQL connection string
   - `JWT_SECRET`: A secure random string for JWT signing
   - `BLOB_READ_WRITE_TOKEN`: From Vercel Blob storage

### 3. Database Setup

1. Create a new database in Neon
2. Run the schema SQL to create tables:
```bash
# Use the Neon console or connect via psql
psql $DATABASE_URL < schema.sql
```

### 4. GitHub Repository Setup

1. Create a new repository on GitHub
2. Push the code:
```bash
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 5. Vercel Deployment

1. Import your GitHub repository in Vercel
2. Configure environment variables in Vercel:
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `BLOB_READ_WRITE_TOKEN`
3. Deploy!

### 6. Vercel Storage Setup

1. In Vercel dashboard, go to Storage
2. Create a new Blob store
3. Copy the token to your environment variables

## Default Operator Login

After setting up the database, you can login as the operator with:
- Email: `operator@ip-renew.com`
- Password: `operator123`

**Important**: Change this password after first login!

## Development

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## API Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `GET /api/auth/me` - Get current user

## Project Structure

```
ip-renewals-app/
├── api/              # Vercel Functions (serverless backend)
├── src/
│   ├── components/   # React components
│   ├── contexts/     # React contexts (Auth)
│   ├── pages/        # Page components
│   └── lib/          # Utility functions
├── public/           # Static assets
└── schema.sql        # Database schema
```

## Next Steps

After initial setup, you can:
1. Add IP asset management features
2. Implement renewal tracking and automation
3. Add payment processing
4. Set up email notifications
5. Implement document storage for IP documents