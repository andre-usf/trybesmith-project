import { ValidationError } from 'joi';
import handleErrorMessage from '../../utils/handleErrorMessage';

const typeByErrorMessage = (error: ValidationError) => {
  const errorMessage = handleErrorMessage(error);
  
  if (errorMessage.message.includes('required')) {
    return { type: 400, result: errorMessage };
  }
  
  return { type: 422, result: errorMessage };
};

export default typeByErrorMessage;
