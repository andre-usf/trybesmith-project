import ordersModel from '../models/ordersModel';
import productsModel from '../models/productsModel';
import validateOrderFields from './validations/validateOrderFields';

const getAllOrders = async () => {
  const orders = await ordersModel.getAllOrders();
  return { type: 200, result: orders };
};

const createOrder = async (order: { productsIds: [], userToken: { id: number } }) => {
  const { userToken, ...rest } = order;
  
  const error = validateOrderFields(rest);
  if (error.type) return error;
  
  // Validation without Joi

  /* if (!Object.keys(order).includes('productsIds')) {
    return { type: 400, result: { message: '"productsIds" is required' } };
  }
  
  if (!Array.isArray(order.productsIds)) {
    return { type: 422, result: { message: '"productsIds" must be an array' } };
  }

  if (order.productsIds.every((product) => typeof product === 'number') && order.productsIds) {
    return { type: 422, result: { message: '"productsIds" must include only numbers' } };
  } */
  
  const insertOrder = await ordersModel.createOrder(userToken.id);

  await Promise.all(order.productsIds.map(async (productId: number) => productsModel
    .updateProduct(insertOrder as number, productId)));

  return { type: 201, result: { userId: userToken.id, productsIds: order.productsIds } };
};

const ordersService = {
  getAllOrders,
  createOrder,
};

export default ordersService;
