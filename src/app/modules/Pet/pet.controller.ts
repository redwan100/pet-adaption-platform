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
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);

  const result = await PetServices.getAllPetFromDB(filtered, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Pets retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});

const updatePet = catchAsync(async (req: Request, res: Response) => {
  const { petId } = req.params;

  const result = await PetServices.updatePetIntDB(petId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Pet profile updated successfully",
    data: result,
  });
});

export const PetControllers = {
  createPet,
  getAllPet,
  updatePet,
};
