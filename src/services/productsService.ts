import { IProduct } from '../interfaces';
import productsModel from '../models/productsModel';
import validateProductFields from './validations/validateProductsFields';

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return { type: 200, result: products };
};

const createProduct = async (product: IProduct) => {
  const error = validateProductFields(product);
  if (error.type) return error;
  
  const insertId = await productsModel.createProduct(product);
  return { type: 201, result: { id: insertId, name: product.name, amount: product.amount } };
};

const productsService = {
  createProduct, getAllProducts,
};

export default productsService;
