import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAllOrders = async (_req: Request, res: Response) => {
  const response = await ordersService.getAllOrders();
  return res.status(response.type).json(response.result);
};

const ordersController = {
  getAllOrders,
};

export default ordersController;
