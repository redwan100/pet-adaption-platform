import { NextFunction, Request, Response } from "express";
import { Secret } from "jsonwebtoken";
import config from "../config";
import { jwtHelper } from "../helper/jwtHelper";
import prisma from "./prisma";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error("unauthorized access");
    }

    const decodedUser = jwtHelper.verifyToken(
      token,
      config.jwt.jwt_secret as Secret
    );
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email: decodedUser?.email,
      },
    });

    req.decoded = user;

    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
