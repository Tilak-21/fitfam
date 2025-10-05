import { Request, Response, NextFunction } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    userId?: string;
  }
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  // Check if user is authenticated via session
  if (!req.session?.userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.userId = req.session.userId;
  next();
};

export const optionalAuth = (req: Request, res: Response, next: NextFunction) => {
  // Attach userId if session exists, but don't block the request
  if (req.session?.userId) {
    req.userId = req.session.userId;
  }
  next();
};
