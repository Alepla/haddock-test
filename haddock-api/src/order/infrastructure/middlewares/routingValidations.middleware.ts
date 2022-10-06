import express from 'express';
import { validationResult, ValidationChain } from 'express-validator';

/**
 *
 * @param validations
 * @returns Middleware that is responsible for returning errors if the format of the request body is invalid.
 */
export const validate = (validations: ValidationChain[]) => {
    return async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};
