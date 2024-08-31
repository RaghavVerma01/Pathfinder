import { body, validationResult } from "express-validator";


export const validate = (validations) => {
    return async (req,res,next ) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req)
        if(!errors.isEmpty()){
            
            return res.status(422).json({errors:errors.array()});
        }
        return next();
    };
};

export const loginValidator = [
    body('email').trim().isEmail().withMessage("Please enter a valid email address"),
    body('password').trim().isLength({min:6}).withMessage("Password should contain atleast 6 characters")
]
export const signupValidator = [
    body('name').notEmpty().withMessage("Name is required"),
    ...loginValidator
]
