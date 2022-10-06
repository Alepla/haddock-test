import { DiscountBase } from '../../../domain/discount/discount.entity';
import DiscountRepository from '../../../domain/discount/discount.repository';
import discounts from './discountsBase.json';
import temporalDiscount from './temporalDiscount.json';

/**
 * Here I use a class to make use of the implements.
 */
class DiscountDataSource implements DiscountRepository {
    /**
     *
     * @returns Simulates fetching data from a database.
     */
    public async getDiscounts(): Promise<DiscountBase[]> {
        return this.innerJoin();
    }

    /**
     *
     * @returns Simulates innerJoin.
     * I map the id of the data of the array of temporary discounts to be able to use it in the following loop that iterates over the discounts, if they match I save the discount inside the array of temporary discounts.
     */
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
