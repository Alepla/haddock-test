import { check, ValidationChain } from 'express-validator';

export const calculateOrderValdiationChain: ValidationChain[] = [
    check('order').isArray(),
    check('order.*.number', 'number field must be a number').isNumeric(),
    check('order.*.quantity', 'quantity field must be a number').isNumeric(),
];
