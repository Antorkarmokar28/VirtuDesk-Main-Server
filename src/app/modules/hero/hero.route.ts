import { Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { HeroValidationSchema } from './hero.validation';
import { HeroController } from './hero.controller';

const router = Router();
// Hero content post route
router.post(
  '/',
  validationRequest(HeroValidationSchema.createHeroSchema),
  HeroController.createHeroContent
);
// Hero content update route
router.put(
  '/:_id',
  validationRequest(HeroValidationSchema.updateHeroSchema),
  HeroController.updateHeroContent
);
// Get all hero content route
router.get('/', HeroController.getAllHeroContent);
// Get all hero content route
router.get('/:_id', HeroController.getSingleHeroContent);
// Delete hero content route
router.delete('/:_id', HeroController.deleteHeroContent);

export const heroRouter = router;
