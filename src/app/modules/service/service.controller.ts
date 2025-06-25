import { StatusCodes } from 'http-status-codes';
import catchAsynch from '../../utils/catchAsynch';
import sendResponse from '../../utils/sendResponse';
import { ServicesService } from './service.service';

// Create service controller
const createService = catchAsynch(async (req, res) => {
  const result = await ServicesService.createServiceIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Service created is successfully',
    data: result,
  });
});

export const ServiceController = {
  createService,
};
