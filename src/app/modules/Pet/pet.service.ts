import prisma from "../../shared/prisma";

const createPetIntoDB = async (payload: any) => {
  console.log(payload);
  const result = await prisma.pet.create({ data: payload });
  return result;
};

export const PetServices = {
  createPetIntoDB,
};
