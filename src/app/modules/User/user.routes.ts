import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router();

router.get("/register", UserControllers.createUser);

export const UserRoutes = router;
