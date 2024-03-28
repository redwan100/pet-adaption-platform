import { z } from "zod";

const createPetValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "name must be string",
    required_error: "name is required",
  }),
  species: z.string({
    invalid_type_error: "species must be string",
    required_error: "species is required",
  }),
  breed: z.string({
    invalid_type_error: "breed must be string",
    required_error: "breed is required",
  }),
  age: z.number({
    invalid_type_error: "age must be number",
    required_error: "age is required",
  }),
  size: z.string({
    invalid_type_error: "size must be string",
    required_error: "size is required",
  }),
  location: z.string({
    invalid_type_error: "location must be string",
    required_error: "location is required",
  }),
  description: z.string({
    invalid_type_error: "species must be string",
    required_error: "species is required",
  }),
  temperament: z.string({
    invalid_type_error: "description must be string",
    required_error: "description is required",
  }),
  medicalHistory: z.string({
    invalid_type_error: "medicalHistory must be string",
    required_error: "medicalHistory is required",
  }),
  adoptionRequirements: z.string({
    invalid_type_error: "adoptionRequirements must be string",
    required_error: "adoptionRequirements is required",
  }),
});

export const PetValidation = {
  createPetValidationSchema,
};
