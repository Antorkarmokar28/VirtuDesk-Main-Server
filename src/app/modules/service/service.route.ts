import { Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { ServiceValidationSchema } from './service.validation';
import { ServiceController } from './service.controller';
import auth from '../../middlewares/auth';
import { User_Role } from '../user/user.constant';

const router = Router();
// Create service route
router.post(
  '/',
  auth(User_Role.admin),
  validationRequest(ServiceValidationSchema.createServiceValidationSchema),
  ServiceController.createService
);
// Update service route
router.put(
  '/:_id',
  auth(User_Role.admin),
  validationRequest(ServiceValidationSchema.updateServiceValidationSchema),
  ServiceController.updateService
);
// Get all service route
router.get('/', auth(User_Role.admin), ServiceController.getAllService);
// Get single service route
router.get('/:_id', auth(User_Role.admin), ServiceController.getSingleService);
// Delete Service route
router.delete('/:_id', auth(User_Role.admin), ServiceController.deleteService);
export const serviceRouter = router;
