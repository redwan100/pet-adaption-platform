import { Router } from "express";
import { AdoptionControllers } from "./adoption.controller";

const router = Router();
router.post("/adoption-request", AdoptionControllers.createAdoption);
router.patch(
  "/adoption-request/:requestId",
  AdoptionControllers.adoptionRequest
);
router.get("/adoption-requests", AdoptionControllers.getAdoption);

export const AdoptionRoutes = router;
