#!/bin/bash

# This script will help you push the code to GitHub

echo "Your GitHub repository has been created at: https://github.com/barnesventures/ip-renewals-app"
echo ""
echo "To push your code, run these commands:"
echo ""
echo "1. If you haven't already set up the remote:"
echo "   git remote add origin https://github.com/barnesventures/ip-renewals-app.git"
echo ""
echo "2. Push the code:"
echo "   git push -u origin main"
echo ""
echo "If you encounter authentication issues, you may need to:"
echo "- Use a Personal Access Token (PAT) instead of password"
echo "- Or use SSH by changing the remote URL to: git@github.com:barnesventures/ip-renewals-app.git"
echo ""
echo "To create a Personal Access Token:"
echo "1. Go to https://github.com/settings/tokens"
echo "2. Generate new token (classic)"
echo "3. Select 'repo' scope"
echo "4. Use the token as your password when prompted"