import { Adoption } from "@prisma/client";
import prisma from "../../shared/prisma";

const createAdoptionIntoDB = async (payload: Adoption) => {
  const result = await prisma.adoption.create({ data: payload });
  return result;
};

const adoptionRequestIntoDB = async (
  id: string,
  payload: Partial<Adoption>
) => {
  await prisma.adoption.findUniqueOrThrow({ where: { id } });

  const result = await prisma.adoption.update({
    where: { id },
    data: payload,
  });
  return result;
};

export const AdoptionServices = {
  createAdoptionIntoDB,
  adoptionRequestIntoDB,
};
