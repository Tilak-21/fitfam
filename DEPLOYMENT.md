# FitFam - cPanel Deployment Guide

## 📋 Overview

For cPanel deployment, the backend Express server serves the built React frontend as static files. You only need to run ONE Node.js application (the backend), which handles both API routes and serving the frontend.

## 🏗️ Project Structure for cPanel

```
public_html/fitfam/          → Your application root
├── backend/
│   ├── dist/                → Compiled backend code
│   │   └── server.js        → Entry point for Node.js app
│   ├── src/
│   ├── node_modules/
│   └── package.json
├── frontend/
│   ├── dist/                → Built React app (static files)
│   │   ├── index.html
│   │   ├── assets/
│   │   └── ...
│   └── package.json
├── shared/
├── .env                     → Production environment variables
└── package.json
```

## ⚠️ Prerequisites

Before deployment, ensure:

1. ✅ **Valid `.cpanel.yml` file** exists in the repository root
2. ✅ **Update USERNAME** in `.cpanel.yml` to your actual cPanel username
3. ✅ **Clean working tree** (no uncommitted changes)
4. ✅ **All changes committed** to your branch

### Updating .cpanel.yml

Before first deployment, edit `.cpanel.yml`:

```yaml
# Line 5: Replace USERNAME with your actual cPanel username
- export DEPLOYPATH=/home/YOUR_CPANEL_USERNAME/public_html/fitfam
```

## 🚀 Deployment Steps

### 1. **Prepare and Push Code**

```bash
# From your local machine
# 1. Update .cpanel.yml with your cPanel username
# 2. Ensure all changes are committed
git add .
git commit -m "Ready for production deployment"
git push origin main
```

### 2. **Clone Repository in cPanel**

**Using cPanel Git™ Version Control (Recommended)**

1. Log into cPanel
2. Go to **Git™ Version Control**
3. Click **Create**
4. Fill in:
   - **Clone URL**: Your repository URL (GitHub/GitLab/etc.)
   - **Repository Path**: `public_html/fitfam`
   - **Repository Name**: `fitfam` (optional)
5. Click **Create**

The system will:
- Clone your repository
- Automatically run `.cpanel.yml` deployment tasks
- Install dependencies and build your application

**Alternative: Using SSH**
```bash
# SSH into your cPanel server
ssh username@yourserver.com

# Navigate to public_html
cd public_html

# Clone repository
git clone <your-repo-url> fitfam
cd fitfam
```

### 3. **Configure Environment Variables (IMPORTANT)**

Create `.env` file in the root directory:

```bash
cd public_html/fitfam
cp .env.example .env
nano .env
```

Update with production values:

```env
# Backend Configuration
NODE_ENV=production
PORT=3000
COOKIE_SECRET=your-super-secure-secret-key-change-this

# Database
DB_HOST=localhost
DB_PORT=3306
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password

# Optional
FRONTEND_URL=https://yourdomain.com
```

### 4. **Set Up Node.js App in cPanel**

1. **Log into cPanel**
2. Go to **Setup Node.js App**
3. Click **Create Application**
4. Configure:
   - **Node.js version**: 18.x or higher
   - **Application mode**: Production
   - **Application root**: `public_html/fitfam`
   - **Application URL**: Your domain (e.g., `yourdomain.com` or `yourdomain.com/fitfam`)
   - **Application startup file**: `backend/dist/server.js`
   - **Environment variables**: Add from your `.env` file

5. Click **Create**

### 5. **Deploy Updates (Automatic or Manual)**

#### **Automatic Deployment (Push Method)**

When you push changes to your repository, cPanel automatically deploys them:

```bash
# On your local machine
git add .
git commit -m "Update message"
git push origin main
```

The `.cpanel.yml` post-receive hook automatically:
1. Copies files to deployment directory
2. Installs dependencies
3. Builds the application

Then restart your Node.js app in cPanel.

#### **Manual Deployment (Pull Method)**

1. Push changes to your remote repository (GitHub, etc.)
2. In cPanel Git™ Version Control:
   - Click **Manage** on your repository
   - Click **Pull or Deploy** tab
   - Click **Update from Remote** (pulls changes)
   - Click **Deploy HEAD Commit** (runs `.cpanel.yml` tasks)
3. Restart Node.js app in cPanel

### 6. **Start/Restart the Application**

After deployment or updates:

1. Go to **Setup Node.js App** in cPanel
2. Find your application
3. Click **Restart** or **Start Application**

Your app should now be running!

## 🌐 How It Works

1. **Single Server**: The Express backend runs on one port (e.g., 3000)
2. **API Routes**: `/api/*` routes are handled by Express
3. **Frontend**: All other routes serve the React app from `frontend/dist/`
4. **React Router**: The `*` catch-all route sends all non-API requests to `index.html`, allowing React Router to handle client-side routing

## 📁 What Goes Where?

### In `public_html/fitfam/`:
- ✅ Entire project (backend, frontend, shared)
- ✅ `.env` file with production values
- ✅ Built files (`backend/dist/`, `frontend/dist/`)

### NOT in `public_html/` root:
- ❌ Don't put individual files in `public_html/` root
- ❌ The Node.js app handles everything from its subdirectory

## 🔧 Troubleshooting

### App won't start:
- Check Node.js version (18+)
- Verify startup file path: `backend/dist/server.js`
- Check environment variables in cPanel
- Check error logs in cPanel Node.js App interface

### API routes not working:
- Ensure `NODE_ENV=production` is set
- Check that backend is compiled: `backend/dist/server.js` exists
- Verify API routes start with `/api/`

### Frontend not loading:
- Ensure frontend is built: `frontend/dist/` exists
- Check that `frontend/dist/index.html` exists
- Verify backend server.ts has static file serving code

### Database connection issues:
- Verify database credentials in `.env`
- Ensure database exists and user has permissions
- Check if MySQL is accessible from your cPanel account

## 📱 Testing Your Deployment

1. **Visit your domain**: `https://yourdomain.com`
2. **Test API health**: `https://yourdomain.com/api/health`
3. **Test navigation**: Click around, ensure React Router works
4. **Test authentication**: Try login/register (when implemented)

## 🔒 Security Checklist

- [ ] Change `COOKIE_SECRET` to a strong random string
- [ ] Set `NODE_ENV=production`
- [ ] Use HTTPS (enable SSL in cPanel)
- [ ] Set secure database credentials
- [ ] Don't commit `.env` file to Git

## 📞 Support

If you encounter issues:
1. Check cPanel error logs
2. Check Node.js app logs in cPanel
3. SSH into server and check: `cd public_html/fitfam && npm start`
