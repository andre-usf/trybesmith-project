import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces';

const getAllProducts = async (): Promise<IProduct[] | RowDataPacket[]> => {
  const [products] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products');
  return products;
};

const createProduct = async ({ name, amount }: IProduct): Promise<number | ResultSetHeader> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)', 
    [name, amount],
  );

  return insertId;
};

const updateProduct = async (orderId: number, productId: number) => {
  await connection.execute<ResultSetHeader>(
    'UPDATE Trybesmith.products SET order_id = (?) WHERE id = (?)',
    [orderId, productId],
  );
};

const productsModel = { createProduct, getAllProducts, updateProduct };

export default productsModel;