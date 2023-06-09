import express from 'express'; // Iniciando
import productController from './database/controllers/product.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.newProduct);

app.get('/products', productController.listAll);

export default app;
