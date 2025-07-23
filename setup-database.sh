#!/bin/bash

# Database setup script for IP Renewals Group

echo "Setting up Neon database..."
echo ""

# Use the DATABASE_URL environment variable or the one provided
DATABASE_URL="${DATABASE_URL:-postgres://neondb_owner:npg_l0ZtRsPgFq7h@ep-icy-glade-adltmcaa-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require}"

# Run the schema
echo "Creating database schema..."
psql "$DATABASE_URL" < schema.sql

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Database setup complete!"
    echo ""
    echo "Default operator credentials:"
    echo "Email: operator@ip-renew.com"
    echo "Password: operator123"
    echo ""
    echo "⚠️  IMPORTANT: Change the operator password after first login!"
else
    echo ""
    echo "❌ Database setup failed. Please check your connection string and try again."
fi