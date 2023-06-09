import { Request, Response } from 'express';
import productService from '../services/product.service';

const newProduct = async (req: Request, res: Response): Promise<Response> => {
  const product = await productService.newProduct(req.body);
  if (product.message) return res.status(422).json({ message: product });
  return res.status(201).send(product.data);
};

export default {
  newProduct,
};