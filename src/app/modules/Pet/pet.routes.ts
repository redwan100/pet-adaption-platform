import { Router } from "express";
import auth from "../../shared/auth";
import validateRequest from "../../shared/validateRequest";
import { PetControllers } from "./pet.controller";
import { PetValidation } from "./pet.validation";

const router = Router();

router.post(
  "/pets",
  auth,
  validateRequest(PetValidation.createPetValidationSchema),
  PetControllers.createPet
);

router.get("/pets", PetControllers.getAllPet);

router.patch("/pets/:petId", auth, PetControllers.updatePet);

export const PetRoutes = router;
