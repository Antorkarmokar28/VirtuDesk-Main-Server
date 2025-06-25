import { StatusCodes } from 'http-status-codes';
import catchAsynch from '../../utils/catchAsynch';
import sendResponse from '../../utils/sendResponse';
import { HeroService } from './hero.service';

// Create hero content
const createHeroContent = catchAsynch(async (req, res) => {
  const result = await HeroService.createHeroContentIntoDB(req.file,req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Hero content is created successfully',
    data: result,
  });
});
// Update hero content
const updateHeroContent = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await HeroService.updateHeroContentIntoDB(_id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Hero content is update successfully',
    data: result,
  });
});
// get All hero content
const getAllHeroContent = catchAsynch(async (req, res) => {
  const result = await HeroService.getAllHeroContentFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Hero content is retrived successfully',
    data: result,
  });
});
// Get single hero content
const getSingleHeroContent = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await HeroService.getSingleHeroContent(_id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'The Hero content is retrived successfully',
    data: result,
  });
});
// Delete hero content
const deleteHeroContent = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await HeroService.deletHeroContentFromDB(_id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Hero content is update successfully',
    data: result,
  });
});

export const HeroController = {
  createHeroContent,
  updateHeroContent,
  getAllHeroContent,
  getSingleHeroContent,
  deleteHeroContent,
};
