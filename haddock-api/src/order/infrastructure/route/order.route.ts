import { Router } from 'express';
import { calculateOrder } from '../controllers/orders.ctrl';
import { validate } from '../middlewares/routingValidations.middleware';
import { calculateOrderValdiationChain } from '../utils/ordersValidatorsChain';

const route = Router();

route.post('/order', validate(calculateOrderValdiationChain), calculateOrder);

export default route;
