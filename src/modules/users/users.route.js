import express from 'express';
import { UserControllers } from './users.controllers.js';
// import { VerifyToken } from '../../middleware/verifyToken.js';

const router=express.Router();

router.post('/create-user',UserControllers.CreateUsersControllers);
router.post('/login',UserControllers.loginControllers)

export  const UserRouter=router;