import express from 'express'; // Iniciando
import productController from './controllers/product.controller';
import orderController from './controllers/order.controller';
import userController from './controllers/user.controller';
import validName from './database/middlewares/nameValidation';
import validPrice from './database/middlewares/priceValidation';
import validToken from './database/middlewares/jwtValidation';
import validUserId from './database/middlewares/userIdValidation';
import validProductIds from './database/middlewares/productIdsValidation';

const app = express();

app.use(express.json());

app.post('/products', validName, validPrice, productController.newProduct);

app.get('/products', productController.listAll);

app.get('/orders', orderController.listAll);

app.post('/login', userController.login);

app.post('/orders', validToken, validUserId, validProductIds, orderController.newOrder);

export default app;
