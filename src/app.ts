import express from 'express'; // Iniciando
import productController from './database/controllers/product.controller';
import orderController from './database/controllers/order.controller';
import userController from './database/controllers/user.controller';
import validName from './database/middlewares/nameValidation';
import validPrice from './database/middlewares/priceValidation';

const app = express();

app.use(express.json());

app.post('/products', validName, validPrice, productController.newProduct);

app.get('/products', productController.listAll);

app.get('/orders', orderController.listAll);

app.post('/login', userController.login);

export default app;
