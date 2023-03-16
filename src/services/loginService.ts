import { createToken } from '../auth/auth';
import userModel from '../models/userModel';

const login = async (body: { username: string, password: string }) => {
  const { username, password } = body;
  
  if (!username) {
    return { type: 400, result: { message: '"username" is required' } };
  }
  
  if (!password) {
    return { type: 400, result: { message: '"password" is required' } };
  }

  const result = await userModel.getUserByUsername(username);
  
  if (!result || result.password !== password) {
    return { type: 401, result: { message: 'Username or password invalid' } };
  }

  const token = createToken(result);

  return { type: 200, result: { token } };
};

export default login;
