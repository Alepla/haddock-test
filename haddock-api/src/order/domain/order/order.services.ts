import { OrderResponse } from './order.entity';

export const getTotal = (products: OrderResponse[]) => {
    const totalIndividual = products.map((product: OrderResponse): number => {
        return product.price * product.cantity;
    });
    return totalIndividual.reduce((a, b) => a + b, 0);
};
