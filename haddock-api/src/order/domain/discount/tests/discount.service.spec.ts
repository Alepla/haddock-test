import { applyDiscount } from '../discount.services';
import {
    productsMock,
    discountMock,
    twoForOnediscountMock,
    spendXtoSaveYdiscountMock,
    expierdDiscountMock,
} from './discount.mocks';

describe('testing discount service', () => {
    it('should return 24.5 after apply 2x1 promotion and discount', () => {
        const total = 34;
        const totalAfterDiscount = applyDiscount(
            productsMock,
            discountMock,
            total,
        );
        expect(totalAfterDiscount).toBe(24.5);
    });

    it('should return 29.5 after apply 2x1', () => {
        const total = 34;
        const totalAfterDiscount = applyDiscount(
            productsMock,
            twoForOnediscountMock,
            total,
        );
        expect(totalAfterDiscount).toBe(29.5);
    });

    it('should return 29 after apply discount', () => {
        const total = 34;
        const totalAfterDiscount = applyDiscount(
            productsMock,
            spendXtoSaveYdiscountMock,
            total,
        );
        expect(totalAfterDiscount).toBe(29);
    });

    it('should return 29.5 after apply 2x1 and expired discount', () => {
        const total = 34;
        const totalAfterDiscount = applyDiscount(
            productsMock,
            expierdDiscountMock,
            total,
        );
        expect(totalAfterDiscount).toBe(29.5);
    });
});
