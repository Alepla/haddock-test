import saveOrder from './orderUseCase';
import OrderDataSource from '../infrastructure/repository/order/order.datasource';
import DiscountDataSource from '../infrastructure/repository/discount/discount.datasource';

const orderRepository = new OrderDataSource();
const DiscountRepository = new DiscountDataSource();

export default saveOrder(orderRepository, DiscountRepository);
