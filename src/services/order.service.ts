import { OrderList } from 'src/types/OrderList';
import { Order } from 'src/types/Order';
import { ServiceResponse } from 'src/types/ServiceResponse';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

const listAll = async (): Promise<OrderList> => {
  const orders = await OrderModel.findAll();
  const products = await ProductModel.findAll();
  
  const result = orders.map((order) => {
    const { id, userId } = order.dataValues;
    const orderProducts = products.filter((product) => product.dataValues.orderId === id);
    const productIds = orderProducts.map((element) => element.dataValues.id);
    return {
      id,
      userId,
      productIds,
    };
  });

  return result;
};

const newOrder = async (order: Order): Promise<ServiceResponse<Order>> => {
  const result = await OrderModel.create(order);
  return { message: null, data: result.dataValues };       
};

export default {
  listAll,
  newOrder,
};