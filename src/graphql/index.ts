import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { GraphQLError } from "graphql";
import { verifyJWT } from "../utils/jwt";

import { UserResolvers } from "./users/resolvers";
import { UserTypeDefs } from "./users/typeDefs";

const startApollo = async (app: any) => {
  try {
    const server = new ApolloServer({
      typeDefs: `#graphql
        ${UserTypeDefs.userTypes}

        type Query {
          ${UserTypeDefs.userQuery}
        }
        type Mutation {
          ${UserTypeDefs.userMutation}
        }
      `,
      resolvers: {
        Query: {
          ...UserResolvers.userQuery,
        },
        Mutation: {
          ...UserResolvers.userMutation,
        },
      },
    });
    await server.start();
    app.use(
      "/graphql",
      expressMiddleware(server, {
        context: async ({ req, res }) => {
          const token = req.headers["authorization"];
          if (!token) {
            throw new GraphQLError("Authorization token missing", {
              extensions: { code: "UNAUTHORIZED" },
            });
          }
          const isAuth = await verifyJWT(token);
          return { auth: isAuth };
        },
      })
    );
  } catch (error) {
    console.log("error", error);
  }
};

export default startApollo;
