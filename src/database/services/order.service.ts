import { Order } from "src/types/Order";
import OrderModel, { OrderSequelizeModel } from "../models/order.model";
import ProductModel from "../models/product.model";

const listAll = async () => {
  const orders = await OrderModel.findAll();
  const products = await ProductModel.findAll();
  
  const result = orders.map((order) => {
    const { id, userId } = order.dataValues;
    const orderProducts = products.filter((product) => product.dataValues.orderId === id);
    const productId = orderProducts.map((element) => element.dataValues.id);
    return {
        id,
        userId,
        productId,
    };
  });

  return result;
};

export default {
  listAll,
};