import { Router } from "express";
import validateRequest from "../../shared/validateRequest";
import { UserControllers } from "./user.controller";
import { UserValidations } from "./user.validation";

const router = Router();

router.post(
  "/register",
  validateRequest(UserValidations.createUserValidationSchema),
  UserControllers.createUser
);

router.post("/login", UserControllers.userLogin);
router.get("/refresh-token", UserControllers.refreshToken);

export const UserRoutes = router;
