import { IProduct } from '../../interfaces';
import schemas from './schemas';
import typeByErrorMessage from './validateErrorMessage';

const validateProductFields = (product: IProduct) => {
  const { error } = schemas.productsSchema.validate(product);
  
  if (error) return typeByErrorMessage(error);
  
  return { type: null, result: '' };
};

export default validateProductFields;
