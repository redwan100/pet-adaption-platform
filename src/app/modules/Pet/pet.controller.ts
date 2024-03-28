import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { PetServices } from "./pet.service";

const createPet = catchAsync(async (req: Request, res: Response) => {
  const result = await PetServices.createPetIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Pet created successfully",
    data: result,
  });
});

export const PetControllers = {
  createPet,
};
