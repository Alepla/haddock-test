import DiscountRepository from '../domain/discount/discount.repository';
import OrderRepository from '../domain/order/order.repository';
import { Order, SaveOrderResponse } from '../domain/order/order.entity';
import { getTotal } from '../domain/order/order.services';
import { applyDiscount } from '../domain/discount/discount.services';

const saveOrder =
    (
        orderRepository: OrderRepository,
        discountRepository: DiscountRepository,
    ) =>
    async (orders: Order[]): Promise<SaveOrderResponse> => {
        let totalAfterDiscount = 0;
        const products = await orderRepository.getProducts(orders);
        const total = getTotal(products);
        const discounts = await discountRepository.getDiscounts();
        if(discounts.length) totalAfterDiscount = applyDiscount(products, discounts, total);
        return { total, totalAfterDiscount };
    };

export default saveOrder;
