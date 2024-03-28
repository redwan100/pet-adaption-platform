import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { AdoptionServices } from "./adoption.service";

const createAdoption = catchAsync(async (req: Request, res: Response) => {
  const result = await AdoptionServices.createAdoptionIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Adoption request submitted successfully",
    data: result,
  });
});

export const AdoptionControllers = {
  createAdoption,
};
