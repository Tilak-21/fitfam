# FitFam

A personal fitness tracking web application with group competition features.

## Project Structure

```
fitfam/
├── backend/       → Express.js API server (TypeScript)
├── frontend/      → React 18 + Vite + Tailwind UI (TypeScript)
└── shared/        → Shared TypeScript types
```

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, TypeScript
- **Backend**: Node.js, Express.js, TypeScript
- **Auth**: Cookie-session middleware
- **Database**: MySQL (future integration)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd fitfam
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Install all dependencies**
   ```bash
   npm run install:all
   ```

### Development

**Quick Start (Recommended)** - Start both backend and frontend together:
```bash
npm run dev
```

This will start:
- Backend server at `http://localhost:5000`
- Frontend dev server at `http://localhost:5173`

**Or start individually:**

1. **Backend only**
   ```bash
   npm run dev:backend
   ```

2. **Frontend only**
   ```bash
   npm run dev:frontend
   ```

### Production Build

**Build everything:**
```bash
npm run build
```

**Start production server:**
```bash
npm start
```

## Deployment to cPanel

1. **Push to Git repository**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **On cPanel:**
   - Use Git Version Control to clone repository
   - SSH into server and run:
     ```bash
     cd fitfam
     cp .env.example .env
     # Edit .env with production values
     cd backend && npm install && npm run build
     cd ../frontend && npm install && npm run build
     ```
   - Set up Node.js app in cPanel pointing to `backend/dist/server.js`
   - Configure environment variables in cPanel Node.js settings

## Features (Planned)

- ✅ Daily fitness goal tracking
- ✅ Workout plan creation
- ✅ Workout logging
- ✅ Group competition via "Fam Center"
- ✅ Profile customization
- ✅ Cookie-based authentication

## License

Private
