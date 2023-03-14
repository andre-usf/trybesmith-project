import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces';

const createProduct = async (product: IProduct): Promise<number | ResultSetHeader> => {
  const { name, amount } = product;
  
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)', 
    [name, amount],
  );

  return insertId;
};

const productsModel = { createProduct };

export default productsModel;