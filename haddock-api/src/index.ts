import express from 'express';
import 'dotenv/config';
import orderRoute from './order/infrastructure/route/order.route';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(orderRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
