import OrderRepository from '../../../domain/order/order.repository';
import {
    Order,
    OrderResponse,
    Product,
} from '../../../domain/order/order.entity';
import products from './products.json';

/**
 * Here I use a class to make use of the implements
 */
class OrderDataSource implements OrderRepository {
    /**
     *
     * @param orders
     * @returns Simulates fetching data from a database.
     */
    public async getProducts(orders: Order[]): Promise<OrderResponse[]> {
        return this.innerJoin(products, orders);
    }

    /**
     *
     * @param products
     * @param orders
     * @returns Simulates innerJoin.
     *
     * I check two arrays, the one for products that I have in the database and the one for orders, which is what the front sends me. I map the id of each product to later see if it exists in the array of orders and thus be able to access certain properties.
     */
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
