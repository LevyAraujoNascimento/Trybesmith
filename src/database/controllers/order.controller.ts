import { Request, Response } from 'express';
import orderService from '../services/order.service';

const listAll = async (_req: Request, res: Response) => {
  const orders = await orderService.listAll();
  console.log(orders)
  return res.status(200).send(orders);  
};

export default {
  listAll,
};