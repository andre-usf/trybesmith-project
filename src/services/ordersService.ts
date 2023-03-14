import ordersModel from '../models/ordersModel';

const getAllOrders = async () => {
  const orders = await ordersModel.getAllOrders();
  return { type: 200, result: orders };
};

const ordersService = {
  getAllOrders,
};

export default ordersService;
