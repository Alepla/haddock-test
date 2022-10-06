import { Router } from 'express';
import orderController from '../controllers/orders.ctrl';

const route = Router();

route.post('/order', orderController);

export default route;
