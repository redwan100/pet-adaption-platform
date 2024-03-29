import { Adoption } from "@prisma/client";
import prisma from "../../shared/prisma";

const createAdoptionIntoDB = async (payload: Adoption) => {
  const result = await prisma.adoption.create({ data: payload });
  return result;
};

const adoptionRequestIntoDB = async (id: string, payload: any) => {
  await prisma.adoption.findUniqueOrThrow({ where: { id } });

  const result = await prisma.adoption.update({
    where: { id },
    data: payload,
  });
  return result;
};

const getAdoptionFromDB = async () => {
  const result = await prisma.adoption.findMany();
  return result;
};

export const AdoptionServices = {
  createAdoptionIntoDB,
  adoptionRequestIntoDB,
  getAdoptionFromDB,
};
