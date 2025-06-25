import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/appError';
import { IService } from './service.interface';
import { Service } from './service.model';

// Create service into the db
const createServiceIntoDB = async (payload: IService) => {
  const result = await Service.create(payload);
  return result;
};
// Update service into db
const updateServiceIntoDB = async (_id: string, data: Partial<IService>) => {
  const isServiceExists = await Service.findByIdAndUpdate(_id, data, {
    new: true,
  });
  if (!isServiceExists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Sorry service is not found!');
  }
  return isServiceExists;
};
// Get all service from the db
const getAllServiceFromDB = async () => {
  const result = await Service.find();
  return result;
};
// Get single service from the db
const getSingleServiceFromDB = async (_id: string) => {
  const isServiceExists = await Service.findById(_id);
  if (!isServiceExists) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      'Sorry the service is not found!'
    );
  }
  return isServiceExists;
};
// Delete service into db
const deleteServiceFromTheDB = async (_id: string) => {
  const isServiceExists = await Service.findByIdAndDelete(_id, { new: true });
  if (!isServiceExists) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      'Sorry the service is not found!'
    );
  }
  return isServiceExists;
};
export const ServicesService = {
  createServiceIntoDB,
  updateServiceIntoDB,
  getAllServiceFromDB,
  getSingleServiceFromDB,
  deleteServiceFromTheDB
};
