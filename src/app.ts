import express from 'express';
import loginRouter from './routes/loginRoute';
import ordersRouter from './routes/ordersRoute';
import productsRouter from './routes/productsRoute';
import userRouter from './routes/userRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;
