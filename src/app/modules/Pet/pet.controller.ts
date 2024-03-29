import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import pick from "../../shared/pick";
import sendResponse from "../../shared/sendResponse";
import { petFilterableFields } from "./pet.constant";
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

const getAllPet = catchAsync(async (req: Request, res: Response) => {
  const filtered = pick(req?.query, petFilterableFields);

  const result = await PetServices.getAllPetFromDB(filtered);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Pets retrieved successfully",
    data: result,
  });
});

export const PetControllers = {
  createPet,
  getAllPet,
};
