import { Router } from "express";
import validationRequest from "../../middlewares/validationRequest";
import { HeroValidationSchema } from "./hero.validation";
import { HeroController } from "./hero.controller";

const router = Router();
// Hero content post route
router.post(
  "/hero",
  validationRequest(HeroValidationSchema.createHeroSchema),
  HeroController.createHeroContent
);

export const heroRouter = router;
