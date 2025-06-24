import { Router } from "express";
import { heroRouter } from "../modules/hero/hero.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/hero-content",
    route: heroRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
