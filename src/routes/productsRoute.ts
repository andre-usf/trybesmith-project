import express from 'express';
import productsController from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.post('/', productsController.createProduct);

export default productsRouter;