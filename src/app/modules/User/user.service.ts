import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "../../shared/prisma";

const createUserIntoDB = async (payload: User) => {
  const hashedPassword = await bcrypt.hash(payload.password, 12);
  payload.password = hashedPassword;
  const userData = await prisma.user.create({
    data: payload,
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return userData;
};

export const UserServices = {
  createUserIntoDB,
};
