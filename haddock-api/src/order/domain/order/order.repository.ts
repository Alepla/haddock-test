import { Order, OrderResponse } from './order.entity';

interface OrderRepository {
    getProducts: (orders: Order[]) => Promise<OrderResponse[]>;
}
export default OrderRepository;
