import schemas from './schemas';
import typeByErrorMessage from './handleTypeByErrorMessage';

const validateOrderFields = (productsIds: { productsIds: [] }) => {
  const { error } = schemas.productsIdsSchema.validate(productsIds);
  
  if (error) return typeByErrorMessage(error);
  
  return { type: null, result: '' };
};

export default validateOrderFields;
