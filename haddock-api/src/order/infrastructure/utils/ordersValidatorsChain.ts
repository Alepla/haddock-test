import { check, ValidationChain } from 'express-validator';

/**
 * It is validated that the json with the fields for the order are correct with the express-validator library.
 */
export const calculateOrderValdiationChain: ValidationChain[] = [
    check('order').isArray(),
    check('order.*.number', 'number field must be a number').isNumeric(),
    check('order.*.quantity', 'quantity field must be a number').isNumeric(),
];
