# Vercel Environment Variables Setup

## Required Environment Variables

Add these environment variables in your Vercel project settings:

### 1. Database Configuration
```
DATABASE_URL=postgres://neondb_owner:npg_l0ZtRsPgFq7h@ep-icy-glade-adltmcaa-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
```

### 2. JWT Secret
Generate a secure random string for JWT signing:
```
JWT_SECRET=<generate-a-secure-random-string>
```

You can generate one using:
```bash
openssl rand -base64 32
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

## Database Setup

Before your app will work, you need to run the database schema:

### Option 1: Using psql (if installed)
```bash
psql "postgres://neondb_owner:npg_l0ZtRsPgFq7h@ep-icy-glade-adltmcaa-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require" < schema.sql
```

### Option 2: Using Neon Console
1. Go to your Neon dashboard
2. Open the SQL Editor
3. Copy the contents of `schema.sql`
4. Paste and run in the SQL Editor

## Verify Deployment

After adding environment variables and setting up the database:
1. Redeploy your project in Vercel
2. Visit your site
3. Try logging in with the operator account:
   - Email: `operator@ip-renew.com`
   - Password: `operator123`

## Security Notes

- **Change the operator password** immediately after first login
- **Generate a strong JWT_SECRET** - never use the default
- Keep your database credentials secure
- Consider using Vercel's environment variable encryption for sensitive values