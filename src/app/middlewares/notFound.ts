import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.OK).json({
    success: false,
    message: "API NOT FOUND !!",
    error: "",
  });
  return;
};

export default notFound;
