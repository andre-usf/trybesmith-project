import { Request, Response } from 'express';
import productsService from '../services/productsService';

const getAllProducts = async (req: Request, res: Response) => {
  const response = await productsService.getAllProducts();
  return res.status(response.type).json(response.result);
};

const createProduct = async (req: Request, res: Response) => {
  const response = await productsService.createProduct(req.body);
  return res.status(response.type).json(response.result);
};

const productsController = {
  createProduct, getAllProducts,
};

export default productsController;