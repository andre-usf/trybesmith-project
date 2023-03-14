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

const productsModel = { createProduct, getAllProducts };

export default productsModel;