import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import { ProductResolvers } from "./products/resolvers";
import { ProductTypeDefs } from "./products/typeDefs";
import { UserResolvers } from "./users/resolvers";
import { UserTypeDefs } from "./users/typeDefs";

const startApollo = async (app: any) => {
  try {
    const server = new ApolloServer({
      typeDefs: `#graphql
        ${UserTypeDefs.userTypes}
        ${ProductTypeDefs.productTypes}       

        type Query {
          ${UserTypeDefs.userQuery}
          ${ProductTypeDefs.productQuery}
        }
        type Mutation {
          ${UserTypeDefs.userMutation}
          ${ProductTypeDefs.productMutation}
        }
      `,
      resolvers: {
        ...ProductResolvers.productHelper,
        Query: {
          ...UserResolvers.userQuery,
          ...ProductResolvers.productQuery,
        },
        Mutation: {
          ...UserResolvers.userMutation,
          ...ProductResolvers.productMutation,
        },
      },
    });
    await server.start();
    app.use(
      "/graphql",
      expressMiddleware(server, {
        context: async ({ req, res }) => {
          const token = req.headers["authorization"];
          // if (!token) {
          // throw new GraphQLError("Authorization token missing", {
          //   extensions: { code: "UNAUTHORIZED" },
          // });
          // }
          // const isAuth = await verifyJWT(token);
          // return { auth: isAuth };
          return { token };
        },
      })
    );
  } catch (error) {
    console.log("error", error);
  }
};

export default startApollo;
