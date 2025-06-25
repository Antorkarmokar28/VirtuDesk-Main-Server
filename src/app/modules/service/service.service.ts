import { IService } from './service.interface';
import { Service } from './service.model';

// Create service into the db
const createServiceIntoDB = async (payload: IService) => {
  const result = await Service.create(payload);
  return result;
};

export const ServicesService = {
  createServiceIntoDB,
};
