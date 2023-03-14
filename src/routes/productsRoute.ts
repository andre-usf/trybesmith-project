import express from 'express';
import productsController from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.post('/', productsController.createProduct);

export default productsRouter;