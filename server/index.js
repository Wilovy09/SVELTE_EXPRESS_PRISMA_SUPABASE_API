import express from 'express';
import cors from 'cors';
import productRoutes from './routes/products.routes.js';
import categoryRoutes from './routes/category.routes.js';

const app = express();

app.use(cors({
    "origin": "http://localhost:5173",
    "methods": "GET,HEAD,PUT,POST,DELETE",
}));

app.use(express.json());

app.use('/api', productRoutes);
app.use('/api', categoryRoutes);

app.listen(8000);