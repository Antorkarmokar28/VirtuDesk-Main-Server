import { StatusCodes } from "http-status-codes";
import catchAsynch from "../../utils/catchAsynch";
import sendResponse from "../../utils/sendResponse";
import { HeroService } from "./hero.service";

// Create hero content
const createHeroContent = catchAsynch(async (req, res) => {
  const result = await HeroService.createHeroContentIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Hero content is created successfully",
    data: result,
  });
});

export const HeroController = {
  createHeroContent,
};
