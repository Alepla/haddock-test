import { DiscountBase } from '../../../domain/discount/discount.entity';
import DiscountRepository from '../../../domain/discount/discount.repository';
import discounts from './discountsBase.json';
import temporalDiscount from './temporalDiscount.json';

class DiscountDataSource implements DiscountRepository {
    public async getDiscounts(): Promise<DiscountBase[]> {
        return this.innerJoin();
    }

    //Simulates innerJoin
    private innerJoin() {
        const map = new Map();
        temporalDiscount.forEach((item) => map.set(item['discountId'], item));

        let join: DiscountBase[] = [];
        discounts.forEach((discount): void => {
            const tempDiscount = map.get(discount['id']);
            if (tempDiscount === undefined) return;

            join.push({ ...tempDiscount, discountRef: { ...discount } });
        });

        return join;
    }
}
export default DiscountDataSource;
