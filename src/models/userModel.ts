import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

const getUserByUsername = async (username: string): Promise<IUser> => {
  const [[user]] = await connection.execute<IUser[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  
  return user;
};

const createUser = async ({ username, vocation, level, password }
: IUser): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  
  return insertId;
};

const userModel = {
  getUserByUsername,
  createUser,
};

export default userModel;
