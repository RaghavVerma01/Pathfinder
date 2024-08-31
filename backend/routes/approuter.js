import {Router} from 'express';
import userRouter from './userroutes.js';
import chatRouter from './chatroutes.js';


const appRouter = Router();
appRouter.use('/user',userRouter); //Requests from 'domain/api/v1/user' will be handled
appRouter.use('/chats',chatRouter); //Requests from 'domain/api/v1/chats' will be handled

export default appRouter;
