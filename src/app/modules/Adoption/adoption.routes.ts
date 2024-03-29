import { Router } from "express";
import { AdoptionControllers } from "./adoption.controller";

const router = Router();
router.post("/adoption-request", AdoptionControllers.createAdoption);
router.patch(
  "/adoption-request/:requestId",
  AdoptionControllers.adoptionRequest
);

export const AdoptionRoutes = router;
