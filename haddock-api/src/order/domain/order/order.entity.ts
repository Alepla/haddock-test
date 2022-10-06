export interface OrderResponse {
    number: number;
    name: string;
    price: number;
    cantity: number;
}

export type Product = Omit<OrderResponse, 'cantity'>;

export type Order = Omit<OrderResponse, 'price' | 'name'>;

export type SaveOrderResponse = {
    total: number;
    totalAfterDiscount: number;
};
