import { Prisma } from "@prisma/client";
import calculatePaginate from "../../helpers/paginationHelper";
import prisma from "../../shared/prisma";
import petSearchableFields from "./pet.constant";

const createPetIntoDB = async (payload: any) => {
  const result = await prisma.pet.create({ data: payload });
  return result;
};

const getAllPetFromDB = async (query: any, options: any) => {
  const { searchTerm, ...rest } = query;
  const { page, limit, skip, sortBy, sortOrder } = calculatePaginate(options);

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
    take: limit,
    skip: skip,
    orderBy:
      sortBy && sortOrder ? { [sortBy]: sortOrder } : { createdAt: "desc" },
  });

  const total = await prisma.pet.count({
    where: whereCondition,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

export const PetServices = {
  createPetIntoDB,
  getAllPetFromDB,
};
