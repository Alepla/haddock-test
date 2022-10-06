export interface OrderResponse {
    number: number;
    name: string;
    price: number;
    quantity: number;
}

export type Product = Omit<OrderResponse, 'quantity'>;

export type Order = Omit<OrderResponse, 'price' | 'name'>;

export type SaveOrderResponse = {
    total: number;
    totalAfterDiscount: number;
};
