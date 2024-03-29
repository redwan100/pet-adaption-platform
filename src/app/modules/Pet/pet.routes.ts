import { Router } from "express";
import validateRequest from "../../shared/validateRequest";
import { PetControllers } from "./pet.controller";
import { PetValidation } from "./pet.validation";

const router = Router();

router.post(
  "/pets",
  validateRequest(PetValidation.createPetValidationSchema),
  PetControllers.createPet
);

router.get("/pets", PetControllers.getAllPet);
router.patch("/pets/:petId", PetControllers.updatePet);

export const PetRoutes = router;
