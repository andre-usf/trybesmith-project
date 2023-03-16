import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAllOrders = async (_req: Request, res: Response) => {
  const response = await ordersService.getAllOrders();
  return res.status(response.type).json(response.result);
};

const createOrder = async (req: Request, res: Response) => {
  const response = await ordersService.createOrder(req.body);
  return res.status(response.type).json(response.result);
};

const ordersController = {
  getAllOrders,
  createOrder,
};

export default ordersController;
