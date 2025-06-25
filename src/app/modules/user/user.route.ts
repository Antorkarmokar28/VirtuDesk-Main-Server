import { Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { userValidationSchema } from './user.validation';
import { UserController } from './user.controller';

const router = Router();

router.post(
  '/',
  validationRequest(userValidationSchema),
  UserController.createUser
);

export const userRouter = router;
