import { DiscountBase } from './discount.entity';

interface DiscountRepository {
    getDiscounts: () => Promise<DiscountBase[]>;
}
export default DiscountRepository;
