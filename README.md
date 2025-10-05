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

## 🚀 Deployment to cPanel

**See [DEPLOYMENT.md](DEPLOYMENT.md) for complete step-by-step deployment instructions.**

### Quick Deployment Summary

1. **Clone repository** to `public_html/fitfam/`
2. **Install dependencies**: `npm run install:all`
3. **Configure .env** with production settings
4. **Build**: `npm run build`
5. **Setup Node.js App** in cPanel:
   - Startup file: `backend/dist/server.js`
   - Set `NODE_ENV=production`
6. **Start application**

The backend serves both API routes (`/api/*`) and the built React frontend.

## Features (Planned)

- ✅ Daily fitness goal tracking
- ✅ Workout plan creation
- ✅ Workout logging
- ✅ Group competition via "Fam Center"
- ✅ Profile customization
- ✅ Cookie-based authentication

## License

Private
