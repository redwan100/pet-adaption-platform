import { Request, Response } from "express";
import httpStatus from "http-status";

const createUser = async (req: Request, res: Response) => {
  res.status(httpStatus.CREATED).json({
    message: "User created",
  });
};

export const UserControllers = {
  createUser,
};
