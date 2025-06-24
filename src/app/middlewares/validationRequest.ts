import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import catchAsynch from "../utils/catchAsynch";


const validationRequest = (schema: AnyZodObject) => {
  return catchAsynch(
    async (req: Request, res: Response, next: NextFunction) => {
      await schema.parseAsync({
        body: req.body.data,
        cookies: req.cookies,
      });
      next();
    }
  );
};
export default validationRequest;
