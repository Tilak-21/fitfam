# Quick cPanel Deployment Checklist

## Before You Deploy

### 1. Update `.cpanel.yml`
```bash
# Edit line 5 - replace USERNAME with your actual cPanel username
- export DEPLOYPATH=/home/YOUR_CPANEL_USERNAME/public_html/fitfam
```

### 2. Commit All Changes
```bash
git status  # Ensure no uncommitted changes
git add .
git commit -m "Ready for deployment"
git push origin main
```

## Deployment Steps

### Step 1: Setup Git Repository in cPanel

1. Login to cPanel
2. Go to **Git™ Version Control**
3. Click **Create**
4. Fill in:
   - **Clone URL**: `https://github.com/yourusername/fitfam.git`
   - **Repository Path**: `public_html/fitfam`
5. Click **Create**

✅ cPanel will automatically:
- Clone the repository
- Run `.cpanel.yml` deployment tasks
- Install dependencies
- Build the application

### Step 2: Create `.env` File

SSH into your server:

```bash
ssh username@yourdomain.com
cd public_html/fitfam
cp .env.production.example .env
nano .env
```

Update these values:
```env
NODE_ENV=production
PORT=3000
COOKIE_SECRET=generate-a-long-random-string-here
DB_HOST=localhost
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
```

### Step 3: Setup Node.js Application

1. In cPanel, go to **Setup Node.js App**
2. Click **Create Application**
3. Configure:
   - **Node.js version**: 18.x or 20.x
   - **Application mode**: Production
   - **Application root**: `public_html/fitfam`
   - **Application URL**: Your domain
   - **Application startup file**: `backend/dist/server.js`
4. Add environment variables (same as `.env`)
5. Click **Create**

### Step 4: Start Application

1. In Node.js App interface, click **Start Application**
2. Visit your domain to verify

## Updating Your App

### Automatic (Push to Git)
```bash
git add .
git commit -m "Update message"
git push origin main
```
→ Then restart Node.js app in cPanel

### Manual (Pull from Remote)
1. Push to remote repository
2. cPanel → Git™ Version Control → Manage
3. Click **Update from Remote**
4. Click **Deploy HEAD Commit**
5. Restart Node.js app

## Troubleshooting

### App won't start
- ✅ Check `backend/dist/server.js` exists
- ✅ Verify Node.js version is 18+
- ✅ Check environment variables in cPanel
- ✅ Review error logs in Node.js App interface

### Build failed
- ✅ Check `.cpanel.yml` has correct username
- ✅ Ensure all dependencies install successfully
- ✅ Check deployment logs in Git™ Version Control

### Database connection error
- ✅ Verify `.env` database credentials
- ✅ Ensure database exists in cPanel MySQL
- ✅ Check user has correct permissions

## Important Files

- `.cpanel.yml` - Deployment configuration (update USERNAME!)
- `.env` - Production environment variables (create on server)
- `backend/dist/server.js` - Node.js entry point
- `frontend/dist/` - Built React app (auto-generated)

## Support

📖 Full guide: See [DEPLOYMENT.md](DEPLOYMENT.md)
