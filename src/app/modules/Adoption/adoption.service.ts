import { Adoption } from "@prisma/client";
import prisma from "../../shared/prisma";

const createAdoptionIntoDB = async (payload: Adoption) => {
  const result = await prisma.adoption.create({ data: payload });
  return result;
};

export const AdoptionServices = {
  createAdoptionIntoDB,
};
