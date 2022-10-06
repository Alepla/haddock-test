import { DiscountBase } from '../../../domain/discount/discount.entity';
import DiscountRepository from '../../../domain/discount/discount.repository';
import discounts from './discounts.json';

class DiscountDataSource implements DiscountRepository {
    public async getDiscounts(): Promise<DiscountBase[]> {
        return discounts;
    }
}
export default DiscountDataSource;
