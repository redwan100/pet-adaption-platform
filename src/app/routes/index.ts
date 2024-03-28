import { Router } from "express";
import { PetRoutes } from "../modules/Pet/pet.routes";
import { UserRoutes } from "../modules/User/user.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: UserRoutes,
  },
  {
    path: "/",
    route: PetRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
