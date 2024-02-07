import { NextFunction, Request, Response } from "express";
import { signupPayload } from "../validation/userSchema";
import appError from "./appError";

export const signupValidate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await signupPayload.validate({ body: req?.body });
    next();
  } catch (error) {
    appError(error, req, res, next);
  }
};
