import { Login, Signup } from "../../types/user.definition";
import { isAuthorized } from "../services/common";
import { createUser, getAllUser, getUser, userLogin } from "../services/user";

export const userQuery = {
  getUser: async (_: any, args: any, context: any) => {
    const auth: any = await isAuthorized(context?.token);
    return await getUser(auth?.userId as string);
  },
  getAllUser: async (_: any, args: any, context: any) => {
    await isAuthorized(context?.token);
    return await getAllUser();
  },
};
export const userMutation = {
  signup: async (_: unknown, args: Signup) => await createUser(args),
  login: async (_: unknown, args: Login) => await userLogin(args),
};

export const UserResolvers = { userQuery, userMutation };
