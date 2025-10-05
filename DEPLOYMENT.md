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

## 🚀 Deployment Steps

### 1. **Push Code to Git Repository**

```bash
# From your local machine
git add .
git commit -m "Ready for production deployment"
git push origin main
```

### 2. **Clone Repository in cPanel**

**Option A: Using cPanel Git Version Control**
- Log into cPanel
- Go to **Git™ Version Control**
- Click **Create**
- Enter your repository URL
- Set repository path to: `public_html/fitfam`
- Click **Create**

**Option B: Using SSH**
```bash
# SSH into your cPanel server
ssh username@yourserver.com

# Navigate to public_html
cd public_html

# Clone repository
git clone <your-repo-url> fitfam
cd fitfam
```

### 3. **Install Dependencies**

```bash
# SSH into your server
cd public_html/fitfam

# Install root dependencies
npm install

# Install backend dependencies
cd backend && npm install && cd ..

# Install frontend dependencies
cd frontend && npm install && cd ..

# Install shared dependencies (if needed)
cd shared && npm install && cd ..
```

### 4. **Configure Environment Variables**

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

### 5. **Build the Application**

```bash
cd public_html/fitfam

# Build everything (frontend + backend)
npm run build
```

This will:
1. Build the React frontend → `frontend/dist/`
2. Compile TypeScript backend → `backend/dist/`

### 6. **Set Up Node.js App in cPanel**

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

### 7. **Configure Environment Variables in cPanel**

In the Node.js App settings, add these environment variables:
- `NODE_ENV=production`
- `PORT=3000` (or the port cPanel assigns)
- `COOKIE_SECRET=your-secret`
- Add all other variables from your `.env` file

### 8. **Start the Application**

In cPanel Node.js App interface:
- Click **Start Application** or **Restart Application**

Your app should now be running!

## 🔄 Updating the Application

When you make changes:

```bash
# On your local machine
git add .
git commit -m "Your update message"
git push origin main

# SSH into cPanel server
cd public_html/fitfam
git pull origin main

# Rebuild
npm run build

# Restart Node.js app in cPanel
# (or via SSH)
npm start
```

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
