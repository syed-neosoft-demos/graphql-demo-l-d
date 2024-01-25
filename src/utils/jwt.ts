import jwt from "jsonwebtoken";

export const signJWT = async (payload: any, time = "1h") => {
  return await jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: time,
  });
};

export const verifyJWT = async (token: any) => {
  return await jwt.verify(token, process.env.JWT_SECRET!);
};
