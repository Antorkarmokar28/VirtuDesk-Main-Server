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
// Update service controller
const updateService = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await ServicesService.updateServiceIntoDB(_id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Service updated is successfully',
    data: result,
  });
});
// Get All Service controller
const getAllService = catchAsynch(async (req, res) => {
  const result = await ServicesService.getAllServiceFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Service retrieved is successfully',
    data: result,
  });
});
// Get single service controller
const getSingleService = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await ServicesService.getSingleServiceFromDB(_id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'The service retrieved is successfully',
    data: result,
  });
});
// Delete service controller
const deleteService = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await ServicesService.deleteServiceFromTheDB(_id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'The service is deleted successfully',
    data: result,
  });
});
export const ServiceController = {
  createService,
  updateService,
  getAllService,
  getSingleService,
  deleteService,
};
