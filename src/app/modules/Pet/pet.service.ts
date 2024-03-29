import { Prisma } from "@prisma/client";
import prisma from "../../shared/prisma";
import petSearchableFields from "./pet.constant";

const createPetIntoDB = async (payload: any) => {
  const result = await prisma.pet.create({ data: payload });
  return result;
};

const getAllPetFromDB = async (query: any) => {
  const { searchTerm, page, limit, sortBy, sortOrder, ...rest } = query;

  if (rest.age) {
    rest.age = Number(rest?.age);
  }

  let andCondition: Prisma.PetWhereInput[] = [];

  if (searchTerm) {
    andCondition.push({
      OR: petSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(rest).length > 0) {
    andCondition.push({
      AND: Object.keys(rest).map((key) => ({
        [key]: {
          equals: rest[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.PetWhereInput = { AND: andCondition };

  const result = await prisma.pet.findMany({
    where: whereCondition,
  });

  return result;
};

export const PetServices = {
  createPetIntoDB,
  getAllPetFromDB,
};
