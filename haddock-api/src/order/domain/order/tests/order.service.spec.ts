import { getTotal } from '../order.services';
import { productsMock } from './order.mock';

describe('testing order service', () => {
    it('should return 34', () => {
        const total = getTotal(productsMock);
        expect(total).toBe(34);
    });
});
