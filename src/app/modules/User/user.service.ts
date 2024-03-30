import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import config from "../../config";
import { jwtHelper } from "../../helper/jwtHelper";
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

const userLoginIntoDB = async (payload: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });

  const isPasswordCorrect = await bcrypt.compare(
    payload.password as string,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new Error("incorrect password");
  }

  const accessToken = jwtHelper.generateToken(
    {
      name: user.name,
      email: user.email,
    },
    config.jwt.jwt_secret as Secret,
    config.jwt.jwt_expires_in as string
  );

  const refreshToken = jwtHelper.generateToken(
    {
      name: user.name,
      email: user.email,
    },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return { accessToken, refreshToken };
};

const refreshToken = async (token: string) => {
  let decodedData;
  try {
    decodedData = jwtHelper.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (error) {
    throw new Error("unauthorized access");
  }

  const isUserExist = await prisma.user.findUniqueOrThrow({
    where: {
      email: decodedData?.email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  const accessToken = jwtHelper.generateToken(
    {
      name: isUserExist.name,
      email: isUserExist.email,
    },
    config.jwt.jwt_secret as Secret,
    config.jwt.jwt_expires_in as string
  );

  return { accessToken };
};

export const UserServices = {
  createUserIntoDB,
  userLoginIntoDB,
  refreshToken,
};
