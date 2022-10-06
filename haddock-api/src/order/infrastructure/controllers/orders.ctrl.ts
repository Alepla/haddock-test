import saveOrder from '../../application';
import { Response, Request } from 'express';

const OrderController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    const { body } = request;
    const { order } = body;
    const bill = await saveOrder(order);
    response.json(bill);
};
export default OrderController;
