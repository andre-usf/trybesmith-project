import { createToken } from '../auth/auth';
import { IUser } from '../interfaces';
import userModel from '../models/userModel';
import validateUserFields from './validations/valideteUserFields';

const createUser = async (user: IUser) => {
  const error = validateUserFields(user);
  if (error.type) return error;
  
  const { username, vocation, level } = user;
  const insertId = await userModel.createUser(user);

  const data = { id: insertId, username, vocation, level };
  const token = createToken(data);

  return { type: 201, result: { token } };
};

const userService = {
  createUser,
};

export default userService;
