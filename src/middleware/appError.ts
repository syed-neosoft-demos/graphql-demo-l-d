import { NextFunction, Request, Response } from "express";

const appError = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === "production") {
    //log error
    res.status(500).send(error?.message);
  } else {
    console.log("error", error?.message);
    res.status(500).send({ msg: error?.message, stack: error?.stack });
  }
};
export default appError;
