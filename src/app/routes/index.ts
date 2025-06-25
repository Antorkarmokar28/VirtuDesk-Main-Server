import { Router } from 'express';
import { heroRouter } from '../modules/hero/hero.route';
import { serviceRouter } from '../modules/service/service.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/hero-content',
    route: heroRouter,
  },
  {
    path: '/service',
    route: serviceRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
