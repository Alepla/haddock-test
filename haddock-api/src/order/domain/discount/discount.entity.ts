export interface DiscountBase {
    discountId: number;
    discountRef: {
        id: number;
        name: string;
        type: string;
    };
    validSince: string;
    validUntil: string;
    over?: number;
    discount?: number;
    item?: number;
}

export type DiscountType = '2X1_PROMOTION' | 'DISCOUNT';
