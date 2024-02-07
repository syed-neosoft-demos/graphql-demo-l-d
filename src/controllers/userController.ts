import { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel";

import appError from "../middleware/appError";
import { signJWT, verifyJWT } from "../utils/jwt";
import { hashPassword, verifyPassword } from "../utils/password";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let payload = req.body;
    console.log("payload", payload);
    const isUser = await userModel.find({
      $or: [{ email: { $eq: payload?.email } }, { username: { $eq: payload?.username } }],
    });
    if (isUser?.length !== 0) {
      return res.status(200).send({ success: false, msg: "user already exist" });
    }
    const hashPass = await hashPassword(payload.password);
    payload = { ...payload, password: hashPass, isActive: true };
    const user = await userModel.create(payload);
    const token = await signJWT({ id: user?._id });
    res.status(200).send({
      success: true,
      msg: "user registration successful",
      data: { token },
    });
  } catch (error: any) {
    appError(error, req, res, next);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const user: any = await userModel.find(
      { $or: [{ email: { $eq: payload?.email } }, { username: { $eq: payload?.email } }] },
      { password: 1, isActive: 1 }
    );
    if (user.length <= 0) {
      return res
        .status(400)
        .send({ success: false, msg: "Email id or password is not valid" });
    }
    if (!user?.[0]?.isActive) {
      return res.status(403).send({ success: false, msg: "Your account is not activated" });
    }
    const isValid = await verifyPassword(payload?.password, user?.[0].password);
    if (isValid) {
      const token = await signJWT({ id: user?.[0]?._id }, "4h");
      res.status(200).send({ success: true, msg: "success", data: { token } });
    } else {
      res.status(404).send({ success: false, msg: "Email id or password is not valid" });
    }
  } catch (error) {
    appError(error, req, res, next);
  }
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const isValid: any = await verifyJWT(payload?.token);
    if (isValid?.id) {
      const hashPass = await hashPassword(payload.password);
      const isActive = await userModel.updateOne(
        { _id: isValid?.id },
        { $set: { password: hashPass } }
      );
      if (isActive?.modifiedCount > 0) {
        res.status(200).send({ success: true, msg: "Password successfully updated" });
      }
    } else {
      res.status(402).send({ success: false, msg: "Invalid token" });
    }
  } catch (error) {
    appError(error, req, res, next);
  }
};
