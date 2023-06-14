import { Request, Response } from 'express';
import orderService from '../services/order.service';

const listAll = async (_req: Request, res: Response): Promise<Response> => {
  const orders = await orderService.listAll();
  return res.status(200).json(orders);  
};

const newOrder = async (req: Request, res: Response): Promise<Response> => {
  const order = await orderService.newOrder(req.body);
  if (!order) {
    return res.status(430).end();  
  }
  return res.status(201).json(req.body);  
};

export default {
  listAll,
  newOrder,
};