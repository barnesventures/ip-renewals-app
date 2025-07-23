# IP Renewals Group Application

An automated intellectual property renewal management system built with React, TypeScript, and Vercel.

## Features

- **Landing Page**: Professional presentation of services
- **Client Portal**: Dashboard for clients to manage their IP renewals
- **Operator Portal**: Administrative dashboard for business operators
- **Authentication**: Stack Auth integration with email/password and OAuth support
- **Database**: PostgreSQL via Neon for data persistence
- **Storage**: Vercel Blob and Edge storage for documents

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Vercel Functions (Serverless)
- **Database**: Neon (PostgreSQL)
- **Authentication**: Stack Auth (Neon's auth solution)
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
   - `VITE_STACK_PROJECT_ID`: Your Stack Auth project ID
   - `VITE_STACK_PUBLISHABLE_CLIENT_KEY`: Your Stack Auth publishable key
   - `STACK_SECRET_SERVER_KEY`: Your Stack Auth server key
   - `BLOB_READ_WRITE_TOKEN`: From Vercel Blob storage (optional)

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
   - `VITE_STACK_PROJECT_ID`
   - `VITE_STACK_PUBLISHABLE_CLIENT_KEY`
   - `STACK_SECRET_SERVER_KEY`
   - `BLOB_READ_WRITE_TOKEN` (optional)
3. Deploy!

### 6. Vercel Storage Setup

1. In Vercel dashboard, go to Storage
2. Create a new Blob store
3. Copy the token to your environment variables

## Creating Operator Accounts

Stack Auth handles all authentication. To create an operator account:

1. Sign up through the app as a regular user
2. Go to your Stack Auth dashboard
3. Find the user and update their metadata to include:
   ```json
   {
     "isOperator": true
   }
   ```
4. The user will now have access to the operator dashboard

## Development

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Authentication

Authentication is handled by Stack Auth, which provides:
- Email/password authentication
- OAuth providers (Google, GitHub, etc.)
- Session management
- User profile management
- Secure token handling

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