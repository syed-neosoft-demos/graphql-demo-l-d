import { User } from "../../types/user.definition";
import UserServices from "../services/user";

const resolvers = {
  Query: {
    getUser: async () => await UserServices.getUser(),
    getAllUser: async () => await UserServices.getAllUser(),
  },
  Mutation: {
    createUser: async (_: unknown, args: User) => await UserServices.createUser(args),
  },
};

export default resolvers;
