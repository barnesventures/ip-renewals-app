# Vercel Environment Variables Setup

## Required Environment Variables

Add these environment variables in your Vercel project settings:

### 1. Database Configuration
```
DATABASE_URL=postgres://neondb_owner:npg_l0ZtRsPgFq7h@ep-icy-glade-adltmcaa-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
```

### 2. Stack Auth Configuration
```
VITE_STACK_PROJECT_ID=170d0243-f28e-4eec-b5a0-70454beaedca
VITE_STACK_PUBLISHABLE_CLIENT_KEY=pck_09bxjv4kjbfke9t41bskwh4vvbgadmvkx7cvd50ew93b0
STACK_SECRET_SERVER_KEY=ssk_cpemzmph5ksvyrgrp9q36xrgmarm1ey591rm98dh7qy40
```

### 3. Vercel Blob Storage (Optional for now)
Once you set up Vercel Blob storage:
```
BLOB_READ_WRITE_TOKEN=<your-blob-token>
```

## How to Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on "Settings" tab
3. Navigate to "Environment Variables"
4. Add each variable with its value
5. Select which environments to apply to (Production, Preview, Development)
6. Click "Save"

## Authentication with Stack Auth

Stack Auth is now handling all authentication. Users can:
- Sign up with email/password
- Sign in with email/password
- Use OAuth providers (if configured in Stack Auth dashboard)
- Manage their account through the UserButton component

## Setting Up Operator Access

To create operator accounts:
1. Sign up as a regular user through the app
2. In the Stack Auth dashboard, update the user's metadata to include:
   ```json
   {
     "isOperator": true
   }
   ```

## Verify Deployment

After adding environment variables:
1. Redeploy your project in Vercel
2. Visit your site
3. Try creating an account and signing in
4. Check that both client and operator dashboards work

## Troubleshooting

If authentication isn't working:
1. Check that all Stack Auth environment variables are set correctly
2. Verify your Stack Auth project is active
3. Check the browser console for errors
4. Ensure Vercel Authentication is disabled for your project

## Security Notes

- Stack Auth handles all authentication securely
- User sessions are managed by Stack Auth
- The database still contains user-related data for your app's business logic