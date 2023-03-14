import express from 'express';
import productsRouter from './routes/productsRoute';
import userRouter from './routes/userRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);

export default app;
