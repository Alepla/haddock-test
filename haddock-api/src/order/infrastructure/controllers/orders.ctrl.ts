import saveOrder from '../../application';
import { Response, Request } from 'express';

export const calculateOrder = async (request: Request, response: Response) => {
    try {
        const bill = await saveOrder(request.body.order);
        response.json(bill);
    } catch (err) {
        response.status(400).json({ errors: err });
    }
};
