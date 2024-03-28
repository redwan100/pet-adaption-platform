import { Router } from "express";
import validateRequest from "../../shared/validateRequest";
import { UserControllers } from "./user.controller";
import { Validations } from "./user.validation";

const router = Router();

router.get(
  "/register",
  validateRequest(Validations.createUserValidationSchema),
  UserControllers.createUser
);

export const UserRoutes = router;
