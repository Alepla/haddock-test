import { OrderResponse } from '../../order/order.entity';
import { DiscountBase } from '../discount.entity';

export const productsMock: OrderResponse[] = [
    {
        number: 12,
        name: 'Spring rolls',
        price: 4.5,
        cantity: 2,
    },
    {
        number: 21,
        name: 'Fried rice with pork',
        price: 6.0,
        cantity: 2,
    },
    {
        number: 37,
        name: 'Chicken with almond sauce',
        price: 6.5,
        cantity: 2,
    },
];

export const discountMock: DiscountBase[] = [
    {
        id: 1,
        name: '2-for-1',
        validSince: '2021-09-20 09:34:00',
        validUntil: '2023-09-20 09:34:00',
        type: '2X1_PROMOTION',
        item: 12,
    },
    {
        id: 2,
        name: 'Spend X to save Y',
        validSince: '2021-09-20 09:34:00',
        validUntil: '2024-09-20 09:34:00',
        type: 'DISCOUNT',
        over: 20,
        discount: 5,
    },
];

export const twoForOnediscountMock: DiscountBase[] = [
    {
        id: 1,
        name: '2-for-1',
        validSince: '2021-09-20 09:34:00',
        validUntil: '2023-09-20 09:34:00',
        type: '2X1_PROMOTION',
        item: 12,
    },
];

export const spendXtoSaveYdiscountMock: DiscountBase[] = [
    {
        id: 2,
        name: 'Spend X to save Y',
        validSince: '2021-09-20 09:34:00',
        validUntil: '2024-09-20 09:34:00',
        type: 'DISCOUNT',
        over: 20,
        discount: 5,
    },
];

export const expierdDiscountMock: DiscountBase[] = [
    {
        id: 1,
        name: '2-for-1',
        validSince: '2021-09-20 09:34:00',
        validUntil: '2023-09-20 09:34:00',
        type: '2X1_PROMOTION',
        item: 12,
    },
    {
        id: 2,
        name: 'Spend X to save Y',
        validSince: '2021-09-20 09:34:00',
        validUntil: '2022-04-20 09:34:00',
        type: 'DISCOUNT',
        over: 20,
        discount: 5,
    },
];
