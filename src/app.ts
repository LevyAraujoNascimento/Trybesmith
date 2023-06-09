import express from 'express'; // Iniciando
import productController from './database/controllers/product.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.newProduct);

export default app;
