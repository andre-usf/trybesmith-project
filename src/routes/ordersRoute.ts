import express from 'express';
import ordersController from '../controllers/ordersController';
import validateToken from '../middlewares/validateToken';

const ordersRouter = express.Router();

ordersRouter.get('/', ordersController.getAllOrders);
ordersRouter.post('/', validateToken, ordersController.createOrder);

export default ordersRouter;
