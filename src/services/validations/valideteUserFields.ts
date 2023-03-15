import { IUser } from '../../interfaces';
import schemas from './schemas';
import typeByErrorMessage from './handleTypeByErrorMessage';

const validateUserFields = (user: IUser) => {
  const { error } = schemas.userSchema.validate(user);
  
  if (error) return typeByErrorMessage(error);
  
  return { type: null, result: '' };
};

export default validateUserFields;
