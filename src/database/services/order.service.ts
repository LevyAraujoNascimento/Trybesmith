import { OrderList } from 'src/types/OrderList';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';

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

export default {
  listAll,
};