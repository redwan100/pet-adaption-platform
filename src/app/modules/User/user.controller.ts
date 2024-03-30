import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "user created successful",
    data: result,
  });
});

const userLogin = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.userLoginIntoDB(req.body);

  const { refreshToken } = result;

  res.cookie("refresh_token", refreshToken, {
    secure: false,
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    data: {
      accessToken: result.accessToken,
    },
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refresh_token } = req.cookies;

  const result = await UserServices.refreshToken(refresh_token);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    data: result,
  });
});

const getUserProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getUserProfileFromDB(req.decoded);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User profile retrieved successfully",
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.updateUserIntoDB(req.decoded, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User profile updated successfully",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  userLogin,
  refreshToken,
  getUserProfile,
  updateUser,
};
