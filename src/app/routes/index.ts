import { Router } from 'express';
import { heroRouter } from '../modules/hero/hero.route';
import { serviceRouter } from '../modules/service/service.route';
import { userRouter } from '../modules/user/user.route';

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
  {
    path: '/user-registration',
    route: userRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
