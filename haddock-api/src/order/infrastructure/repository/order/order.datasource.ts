import OrderRepository from '../../../domain/order/order.repository';
import {
    Order,
    OrderResponse,
    Product,
} from '../../../domain/order/order.entity';
import products from './products.json';

//Here I use a class for take the implements functionality
class OrderDataSource implements OrderRepository {
    public async getProducts(orders: Order[]): Promise<OrderResponse[]> {
        return this.innerJoin(products, orders);
    }

    //Simulates innerJoin
    private innerJoin(products: Product[], orders: Order[]) {
        const map = new Map();
        products.forEach((item: Product) => map.set(item['number'], item));

        let join: OrderResponse[] = [];
        orders.forEach((order: Order): void => {
            const product = map.get(order['number']);
            if (product === undefined) return;

            join.push({ ...product, ...order });
        });
        return join;
    }
}
export default OrderDataSource;
