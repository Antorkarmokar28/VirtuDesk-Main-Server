import { IUser } from './user.interface';
import { User } from './user.model';

// Create use into DB
const createUserIntoDB = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

export const UserService = {
  createUserIntoDB,
};
