import { applyDiscount } from '../discount.services';
import {
    productsMock,
    discountMock,
    twoForOnediscountMock,
    spendXtoSaveYdiscountMock,
    expierdDiscountMock,
    bothExpierdDiscountMock,
} from './discount.mocks';

describe('testing discount service', () => {
    const total = 34;
    it('should return 24.5 after apply 2x1 promotion and discount', () => {
        const totalAfterDiscount = applyDiscount(
            productsMock,
            discountMock,
            total,
        );
        expect(totalAfterDiscount).toBe(24.5);
    });

    it('should return 29.5 after apply 2x1', () => {
        const totalAfterDiscount = applyDiscount(
            productsMock,
            twoForOnediscountMock,
            total,
        );
        expect(totalAfterDiscount).toBe(29.5);
    });

    it('should return 29 after apply discount', () => {
        const totalAfterDiscount = applyDiscount(
            productsMock,
            spendXtoSaveYdiscountMock,
            total,
        );
        expect(totalAfterDiscount).toBe(29);
    });

    it('should return 29.5 after apply 2x1 and expired discount', () => {
        const totalAfterDiscount = applyDiscount(
            productsMock,
            expierdDiscountMock,
            total,
        );
        expect(totalAfterDiscount).toBe(29.5);
    });

    it('should return 34 after do not apply any discount', () => {
        const totalAfterDiscount = applyDiscount(productsMock, [], total);
        expect(totalAfterDiscount).toBe(34);
    });

    it('should return 34 after apply expired discounts', () => {
        const totalAfterDiscount = applyDiscount(
            productsMock,
            bothExpierdDiscountMock,
            total,
        );
        expect(totalAfterDiscount).toBe(34);
    });
});
