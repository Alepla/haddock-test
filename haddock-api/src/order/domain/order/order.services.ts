import { OrderResponse } from './order.entity';

/**
 *
 * @param products
 * @returns Multiply the price by the number of orders for each product and then add the whole.
 */
export const getTotal = (products: OrderResponse[]) => {
    const totalIndividual = products.map((product: OrderResponse): number => {
        return product.price * product.quantity;
    });
    return totalIndividual.reduce((a, b) => a + b, 0);
};
