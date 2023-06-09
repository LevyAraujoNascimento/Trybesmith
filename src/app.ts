import express from 'express'; // Iniciando
import productController from './database/controllers/product.controller';
import orderController from './database/controllers/order.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.newProduct);

app.get('/products', productController.listAll);

app.get('/orders', orderController.listAll);

export default app;
