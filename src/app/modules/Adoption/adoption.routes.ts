import { Router } from "express";
import auth from "../../shared/auth";
import { AdoptionControllers } from "./adoption.controller";

const router = Router();
router.post("/adoption-request", auth, AdoptionControllers.createAdoption);
router.patch(
  "/adoption-request/:requestId",
  auth,
  AdoptionControllers.adoptionRequest
);
router.get("/adoption-requests", auth, AdoptionControllers.getAdoption);

export const AdoptionRoutes = router;
