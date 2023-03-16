import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../auth/auth';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const { payload } = verifyToken(authorization);

    req.body.userToken = payload;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token', error });
  }
};

export default validateToken;
