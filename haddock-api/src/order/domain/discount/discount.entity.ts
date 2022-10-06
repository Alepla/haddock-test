export interface DiscountBase {
    id: number;
    name: string;
    validSince: string;
    validUntil: string;
    type: string;
    over?: number;
    discount?: number;
    item?: number;
}

export type ItemDiscount = Omit<DiscountBase, 'item'>;

export type Promotion = Omit<DiscountBase, 'over' | 'discount'>;

export type DiscountType = '2X1_PROMOTION' | 'DISCOUNT';
