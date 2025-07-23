# IP Renewals App - Development Guide

This document contains important information for Claude (AI assistant) when working on this project.

## Project Overview

- **Name**: IP Renewals Group
- **Domain**: ip-renew.com
- **Purpose**: Automated intellectual property renewal management system
- **Tech Stack**: React + TypeScript + Vite, Vercel Functions, Neon PostgreSQL, Tailwind CSS

## Available CLI Tools

### Vercel CLI
- **Status**: ✅ Authenticated as `phil-8266`
- **Usage**: Deploy and manage Vercel projects
- **Common commands**:
  ```bash
  vercel          # Deploy to Vercel
  vercel dev      # Run development server with functions
  vercel env      # Manage environment variables
  vercel logs     # View function logs
  ```

### Neon CLI
- **Status**: ✅ Authenticated with organization `Vercel: Barnes Ventures' projects`
- **Usage**: Manage Neon database instances
- **Common commands**:
  ```bash
  neonctl projects list       # List all projects
  neonctl projects create     # Create new project
  neonctl connection-string   # Get connection string
  ```

### Other Tools
- **GitHub CLI (gh)**: ✅ Authenticated as `barnesventures`
- **Node.js**: v18.19.1
- **npm**: v9.2.0
- **Git**: v2.43.0

## Database Information

- **Provider**: Neon
- **Database Name**: neondb
- **Connection**: Uses pooled connection for serverless
- **Schema**: Located in `schema.sql`

## Environment Variables

Required for deployment:
- `DATABASE_URL` - Neon PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT token signing
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob storage token (when needed)

## Important Commands

### Local Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run linter
```

### Database Setup
```bash
# Run schema in Neon
psql "$DATABASE_URL" < schema.sql

# Or use the setup script
./setup-database.sh
```

### Deployment
```bash
vercel              # Deploy to Vercel
git push            # Auto-deploy via GitHub integration
```

## Default Credentials

**Operator Account** (change after first login):
- Email: `operator@ip-renew.com`
- Password: `operator123`

## Project Structure

```
/api              - Vercel Functions (serverless backend)
/src
  /components     - React components
  /contexts       - React contexts (Auth)
  /pages          - Page components
  /lib            - Utility functions
/public           - Static assets
schema.sql        - Database schema
```

## Key Features Implemented

1. ✅ Landing page with service information
2. ✅ Authentication system (login/signup)
3. ✅ Client dashboard
4. ✅ Operator dashboard
5. ✅ JWT-based authentication
6. ✅ Database schema for users, IP assets, renewals

## Next Features to Implement

1. IP asset management (CRUD operations)
2. Renewal tracking and automation
3. Payment processing integration
4. Email notifications
5. Document storage using Vercel Blob
6. Automated renewal processing
7. Client billing and invoicing
8. Analytics and reporting

## Development Guidelines

1. Always use TypeScript for type safety
2. Follow existing code patterns and structure
3. Use Tailwind CSS for styling
4. Create API routes in `/api` directory
5. Use Neon's pooled connection for serverless functions
6. Implement proper error handling
7. Add loading states for better UX
8. Keep components small and focused

## Security Considerations

1. Never commit sensitive data
2. Use environment variables for secrets
3. Validate all user inputs
4. Use bcrypt for password hashing
5. Implement proper JWT expiration
6. Sanitize database queries
7. Use HTTPS in production

## Deployment Process

1. Code changes pushed to GitHub main branch
2. Vercel automatically deploys via GitHub integration
3. Environment variables are set in Vercel dashboard
4. Database migrations run manually when needed

## Testing Approach

- Manual testing for now
- Future: Add Jest for unit tests
- Future: Add Cypress for E2E tests

## Contact

- GitHub: barnesventures
- Email: phil@barnes.ventures