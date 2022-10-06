import saveOrder from '../../application';
import { Response, Request } from 'express';

/**
 *
 * @param request
 * @param response
 */
export const calculateOrder = async (request: Request, response: Response) => {
    try {
        response.json(await saveOrder(request.body.order));
    } catch (err) {
        response.status(400).json({ errors: err });
    }
};
