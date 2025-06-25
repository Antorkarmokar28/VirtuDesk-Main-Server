import { Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { ServiceValidationSchema } from './service.validation';
import { ServiceController } from './service.controller';

const router = Router();
// Create service route
router.post(
  '/',
  validationRequest(ServiceValidationSchema.createServiceValidationSchema),
  ServiceController.createService
);
// Update service route
router.put(
  '/:_id',
  validationRequest(ServiceValidationSchema.updateServiceValidationSchema),
  ServiceController.updateService
);
// Get all service route
router.get('/', ServiceController.getAllService);
// Get single service route
router.get('/:_id', ServiceController.getSingleService);
// Delete Service route
router.delete('/:_id', ServiceController.deleteService);
export const serviceRouter = router;
