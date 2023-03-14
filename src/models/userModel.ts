import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

const createUser = async ({ username, vocation, level, password }
: IUser): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  
  return insertId;
};

const userModel = {
  createUser,
};

export default userModel;
