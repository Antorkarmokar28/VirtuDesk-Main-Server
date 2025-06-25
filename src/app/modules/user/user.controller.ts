import { StatusCodes } from 'http-status-codes';
import catchAsynch from '../../utils/catchAsynch';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';

// Create user controller
const createUser = catchAsynch(async (req, res) => {
  const result = await UserService.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User registar is successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
};
