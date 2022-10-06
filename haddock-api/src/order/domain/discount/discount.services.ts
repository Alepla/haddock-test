import { OrderResponse } from '../order/order.entity';
import { DiscountBase, DiscountType } from './discount.entity';

export const applyDiscount = (
    products: OrderResponse[],
    discounts: DiscountBase[],
    totalPrice: number,
): number => {
    const validDiscounts = validateDiscount(discounts);
    let total = totalPrice;
    validDiscounts.map((discount: DiscountBase): void => {
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

const applyTwoXOnePromotion = (
    products: OrderResponse[],
    discount: DiscountBase,
): number => {
    const product = products.find(
        (product: OrderResponse): boolean => product.number === discount.item,
    );
    if (product!.number === discount.item) {
        const productDivide = product!.cantity / 2;
        return product!.price * Math.trunc(productDivide);
    }
    return 0;
};

const applyItemDiscount = (
    discount: DiscountBase,
    totalPrice: number,
): number => {
    if (discount.over && totalPrice > discount.over) return discount.discount!;
    return 0;
};
