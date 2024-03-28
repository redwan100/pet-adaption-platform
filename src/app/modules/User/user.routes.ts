import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router();

router.get("/create-user", UserControllers.createUser);

export const UserRoutes = router;
