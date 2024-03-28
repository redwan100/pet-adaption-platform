import { Router } from "express";
import { AdoptionRoutes } from "../modules/Adoption/adoption.routes";
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
  {
    path: "/",
    route: AdoptionRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
