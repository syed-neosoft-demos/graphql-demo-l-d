import { GraphQLError } from "graphql";
import { verifyJWT } from "../../utils/jwt";

export const isAuthorized = async (token: string) => {
  if (!token) {
    throw new GraphQLError("Authorization token missing", {
      extensions: { code: "UNAUTHORIZED" },
    });
  }
  const isAuth = await verifyJWT(token);
  return isAuth;
};
