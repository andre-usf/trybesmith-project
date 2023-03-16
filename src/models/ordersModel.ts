import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute<(IOrder & RowDataPacket)[]>(`
  SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds 
  FROM Trybesmith.orders AS orders INNER JOIN Trybesmith.products AS products 
  ON orders.id = products.order_id GROUP BY orders.id, orders.user_id;
  `);

  return orders;
};

const createOrder = async (id: number):
Promise<number | ResultSetHeader> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUE (?)', 
    [id],
  );

  return insertId;
};

const ordersModel = {
  getAllOrders,
  createOrder,
};

export default ordersModel;
