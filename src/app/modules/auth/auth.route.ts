import { Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import {
  authValidationSchema,
  refreshTokenValidationSchema,
} from './auth.validation';
import { AuthController } from './auth.controller';

const router = Router();

router.post(
  '/login',
  validationRequest(authValidationSchema),
  AuthController.userLogin
);

router.post(
  '/refresh-token',
  validationRequest(refreshTokenValidationSchema),
  AuthController.refreshToken
);

export const authRouter = router;
