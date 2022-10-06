import { OrderResponse } from '../../order/order.entity';
import { DiscountBase } from '../discount.entity';

export const productsMock: OrderResponse[] = [
    {
        number: 12,
        name: 'Spring rolls',
        price: 4.5,
        quantity: 2,
    },
    {
        number: 21,
        name: 'Fried rice with pork',
        price: 6.0,
        quantity: 2,
    },
    {
        number: 37,
        name: 'Chicken with almond sauce',
        price: 6.5,
        quantity: 2,
    },
];

export const discountMock: DiscountBase[] = [
    {
        discountId: 1,
        discountRef: {
            id: 1,
            name: '2-for-1',
            type: '2X1_PROMOTION',
        },
        validSince: '2021-09-20 09:34:00',
        validUntil: '2023-09-20 09:34:00',
        item: 12,
    },
    {
        discountId: 2,
        discountRef: {
            id: 2,
            name: 'Spend X to save Y',
            type: 'DISCOUNT',
        },
        validSince: '2021-09-20 09:34:00',
        validUntil: '2024-09-20 09:34:00',
        over: 20,
        discount: 5,
    },
];

export const twoForOnediscountMock: DiscountBase[] = [
    {
        discountId: 1,
        discountRef: {
            id: 1,
            name: '2-for-1',
            type: '2X1_PROMOTION',
        },
        validSince: '2021-09-20 09:34:00',
        validUntil: '2023-09-20 09:34:00',
        item: 12,
    },
];

export const spendXtoSaveYdiscountMock: DiscountBase[] = [
    {
        discountId: 2,
        discountRef: {
            id: 2,
            name: 'Spend X to save Y',
            type: 'DISCOUNT',
        },
        validSince: '2021-09-20 09:34:00',
        validUntil: '2024-09-20 09:34:00',
        over: 20,
        discount: 5,
    },
];

export const expierdDiscountMock: DiscountBase[] = [
    {
        discountId: 1,
        discountRef: {
            id: 1,
            name: '2-for-1',
            type: '2X1_PROMOTION',
        },
        validSince: '2021-09-20 09:34:00',
        validUntil: '2023-09-20 09:34:00',
        item: 12,
    },
    {
        discountId: 2,
        discountRef: {
            id: 2,
            name: 'Spend X to save Y',
            type: 'DISCOUNT',
        },
        validSince: '2021-09-20 09:34:00',
        validUntil: '2022-04-20 09:34:00',
        over: 20,
        discount: 5,
    },
];

export const bothExpierdDiscountMock: DiscountBase[] = [
    {
        discountId: 1,
        discountRef: {
            id: 1,
            name: '2-for-1',
            type: '2X1_PROMOTION',
        },
        validSince: '2021-09-20 09:34:00',
        validUntil: '2022-04-20 09:34:00',
        item: 12,
    },
    {
        discountId: 2,
        discountRef: {
            id: 2,
            name: 'Spend X to save Y',
            type: 'DISCOUNT',
        },
        validSince: '2021-09-20 09:34:00',
        validUntil: '2022-04-20 09:34:00',
        over: 20,
        discount: 5,
    },
];
