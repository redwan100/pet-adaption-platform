import { Router } from "express";
import { AdoptionControllers } from "./adoption.controller";

const router = Router();
router.post(
  "/adoption-request",
  //   validateRequest(PetValidation.createPetValidationSchema),
  AdoptionControllers.createAdoption
);

export const AdoptionRoutes = router;
