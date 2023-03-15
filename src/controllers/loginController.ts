import { Request, Response } from 'express';
import loginService from '../services/loginService';

const loginController = async (req: Request, res: Response) => {
  const response = await loginService(req.body);
  return res.status(response.type).json(response.result);
};

export default loginController;
