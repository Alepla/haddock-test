import saveOrder from '../../application';
import { Response, Request } from 'express';

const OrderController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    const { body } = request;
    const { order } = body;
    try {
        const bill = await saveOrder(order);
        response.json(bill);
    } catch (err) {
        response.status(500);
        response.json(err);
    }
};
export default OrderController;
