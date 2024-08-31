import {Router} from 'express';
import { getAllusers, userlogin, userSignUp } from '../controllers/user-controller.js';
import {loginValidator, signupValidator, validate} from '../utils/validators.js'

const userRouter = Router();

userRouter.get('/',getAllusers)

// Signup Route
userRouter.post('/signup',validate(signupValidator),userSignUp)
// Login Route
userRouter.post('/login',validate(loginValidator),userlogin)

export default userRouter;