import DiscountRepository from '../domain/discount/discount.repository';
import OrderRepository from '../domain/order/order.repository';
import { Order, SaveOrderResponse } from '../domain/order/order.entity';
import { getTotal } from '../domain/order/order.services';
import { applyDiscount } from '../domain/discount/discount.services';

/**
 *
 * @param orderRepository
 * @param discountRepository
 * @returns Application layer which is responsible for connecting the domain logic with the infrastructure layer.
 */
const saveOrder =
    (
        orderRepository: OrderRepository,
        discountRepository: DiscountRepository,
    ) =>
    async (orders: Order[]): Promise<SaveOrderResponse> => {
        let totalAfterDiscount = 0;
        /**
         * From the order I get several properties such as the name or the price of the product.
         */
        const products = await orderRepository.getProducts(orders);
        /**
         * Calculate the order total.
         */
        const total = getTotal(products);
        /**
         * I get the existing discounts in the database.
         */
        const discounts = await discountRepository.getDiscounts();
        if (discounts.length)
            /**
             * Calculate the total after discount.
             */
            totalAfterDiscount = applyDiscount(products, discounts, total);
        /**
         * Returns the receipt with the total without discount and the total with discount if it has been applied.
         */
        return { total, totalAfterDiscount };
    };

export default saveOrder;
