import express from 'express';
import ordersRouter from './routes/ordersRoute';
import productsRouter from './routes/productsRoute';
import userRouter from './routes/userRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);

export default app;
