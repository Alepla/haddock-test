import { OrderResponse } from '../order/order.entity';
import { DiscountBase, DiscountType } from './discount.entity';

/**
 *
 * @param products
 * @param discounts
 * @param totalPrice
 * @returns I iterate the array of discounts to apply the correct function depending on what type it is. And return the total after discount.
 */
export const applyDiscount = (
    products: OrderResponse[],
    discounts: DiscountBase[],
    totalPrice: number,
): number => {
    const validDiscounts = validateDiscount(discounts);
    let total = totalPrice;
    validDiscounts.forEach((discount: DiscountBase): void => {
        const type: DiscountType = discount.discountRef.type as DiscountType;
        switch (type) {
            case '2X1_PROMOTION':
                total = total - applyTwoXOnePromotion(products, discount);
                break;
            case 'DISCOUNT':
                total = total - applyItemDiscount(discount, total);
                break;
        }
    });

    return total;
};

/**
 *
 * @param discounts
 * @returns Valid that the discounts are temporarily valid.
 */
const validateDiscount = (discounts: DiscountBase[]): DiscountBase[] => {
    const actualDate = new Date();
    let validDiscounts: DiscountBase[] = [];
    discounts.forEach((discount: DiscountBase): void => {
        const validSince = new Date(discount.validSince);
        const validUntil = new Date(discount.validUntil);
        if (validSince < actualDate && actualDate < validUntil) {
            validDiscounts.push(discount);
        }
        return;
    });
    return validDiscounts;
};

/**
 *
 * @param products
 * @param discount
 * @returns I return the subtraction applying the two x one.
 */
const applyTwoXOnePromotion = (
    products: OrderResponse[],
    discount: DiscountBase,
): number => {
    const product = products.find(
        (product: OrderResponse): boolean => product.number === discount.item,
    );
    if (product!.number === discount.item) {
        const productDivide = product!.quantity / 2;
        return product!.price * Math.trunc(productDivide);
    }
    return 0;
};

/**
 *
 * @param discount
 * @param totalPrice
 * @returns I return the discount if the total amount of the order exceeds x quantity.
 */
const applyItemDiscount = (
    discount: DiscountBase,
    totalPrice: number,
): number => {
    if (discount.over && totalPrice > discount.over) return discount.discount!;
    return 0;
};
