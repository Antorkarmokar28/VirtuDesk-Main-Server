import { Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { ServiceValidationSchema } from './service.validation';
import { ServiceController } from './service.controller';

const router = Router();
router.post(
  '/',
  validationRequest(ServiceValidationSchema.createServiceValidationSchema),
  ServiceController.createService
);

export const serviceRouter = router;
