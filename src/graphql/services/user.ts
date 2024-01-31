import userModel from "../../models/userModel";
import { Login, Signup } from "../../types/user.definition";
import { signJWT } from "../../utils/jwt";
import { hashPassword, verifyPassword } from "../../utils/password";

export const getUser = async (userId: string) => {
  try {
    const users = await userModel.findOne({ _id: userId });
    console.log("users", users);
    return users;
  } catch (error) {
    console.log("error", error);
  }
};
export const getAllUser = async () => {
  try {
    const users = await userModel.find({}).limit(20);
    console.log("users", users);
    return users;
  } catch (error) {
    console.log("error", error);
  }
};

export const createUser = async (payload: Signup) => {
  console.log("payload", payload);
  const hashPass = await hashPassword(payload?.password);
  console.log("hashPass", hashPass);
  const user = await userModel.create({ ...payload, password: hashPass });
  return user?._id;
};

export const userLogin = async (payload: Login) => {
  const user = await userModel.findOne({ email: payload?.email }, { password: 1, email: 1 });
  if (!user?.email) throw new Error("Invalid email");
  const passValid = await verifyPassword(
    payload?.password as string,
    user?.password as string
  );
  console.log("passValid", passValid);
  if (!passValid) throw new Error("Invalid password");
  console.log("user", user);
  const token = await signJWT({ userId: user?._id, email: user?.email }, "4h");
  return token;
};
