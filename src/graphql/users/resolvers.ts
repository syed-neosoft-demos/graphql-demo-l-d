import { Login, Signup } from "../../types/user.definition";
import { createUser, getAllUser, getUser, userLogin } from "../services/user";

const resolvers = {
  Query: {
    getUser: async (_: any, args: any, context: any) => {
      console.log("context", context);
      return await getUser(context?.auth?.userId as string);
    },
    getAllUser: async () => await getAllUser(),
  },
  Mutation: {
    signup: async (_: unknown, args: Signup) => await createUser(args),
    login: async (_: unknown, args: Login) => await userLogin(args),
  },
};

export default resolvers;
