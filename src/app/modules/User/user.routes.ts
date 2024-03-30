import { Router } from "express";
import auth from "../../shared/auth";
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

router.get("/profile", auth, UserControllers.getUserProfile);
router.put("/profile", auth, UserControllers.updateUser);

export const UserRoutes = router;
