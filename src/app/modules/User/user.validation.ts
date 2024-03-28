import { z } from "zod";

const createUserValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "name must be string",
    required_error: "name is required",
  }),
  email: z
    .string({
      invalid_type_error: "email must be string",
      required_error: "email is required",
    })
    .trim(),

  password: z
    .string({
      invalid_type_error: "password must be string",
      required_error: "password is required",
    })
    .trim(),
});

export const Validations = {
  createUserValidationSchema,
};
