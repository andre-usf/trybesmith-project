import { Request, Response } from 'express';
import userService from '../services/userService';

const createUser = async (req: Request, res: Response) => {
  const response = await userService.createUser(req.body);
  return res.status(response.type).json(response.result);
};

const userController = {
  createUser,
};

export default userController;
