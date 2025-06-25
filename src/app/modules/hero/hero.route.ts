import { NextFunction, Request, Response, Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { HeroValidationSchema } from './hero.validation';
import { HeroController } from './hero.controller';
import auth from '../../middlewares/auth';
import { User_Role } from '../user/user.constant';
import { upload } from '../../utils/sendImageToCloudinary';

const router = Router();
// Hero content post route
router.post(
  '/',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  auth(User_Role.admin),
  validationRequest(HeroValidationSchema.createHeroSchema),
  HeroController.createHeroContent
);
// Hero content update route
router.put(
  '/:_id',
  auth(User_Role.admin),
  validationRequest(HeroValidationSchema.updateHeroSchema),
  HeroController.updateHeroContent
);
// Get all hero content route
router.get('/', auth(User_Role.admin), HeroController.getAllHeroContent);
// Get all hero content route
router.get('/:_id', auth(User_Role.admin), HeroController.getSingleHeroContent);
// Delete hero content route
router.delete('/:_id', auth(User_Role.admin), HeroController.deleteHeroContent);

export const heroRouter = router;
