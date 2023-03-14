import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'secret';

const JWT_CONFIG: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

export const createToken = (data: IUser) => jwt.sign({ payload: data }, secret, JWT_CONFIG);

export const verifyToken = (token: string) => jwt.verify(token, secret);
