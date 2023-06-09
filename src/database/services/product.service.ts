import { Product } from 'src/types/Product';
import { ServiceResponse } from 'src/types/ServiceResponse';
import ProductModel,
{ ProductInputtableTypes, ProductSequelizeModel } from '../models/product.model';

const newProduct = async (product: ProductInputtableTypes): Promise<ServiceResponse<Product>> => {
  if (!product.name) return { message: 'name is required', data: null };
  if (!product.price) return { message: 'price is required', data: null };
  if (!product.orderId) return { message: 'orderId is required', data: null };
  const result = await ProductModel.create(product);
  return { message: null, data: result.dataValues };
};

const listAll = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const result = await ProductModel.findAll();
  return { message: null, data: result };
};

export default {
  newProduct,
  listAll,
};