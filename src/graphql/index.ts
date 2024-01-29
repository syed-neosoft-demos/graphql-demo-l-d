import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import userResolvers from "./users/resolvers";
import userTypeDefs from "./users/typeDefs";

const startApollo = async (app: any) => {
  try {
    const server = new ApolloServer({
      typeDefs: userTypeDefs,
      resolvers: userResolvers,
    });
    await server.start();
    app.use("/graphql", expressMiddleware(server));
  } catch (error) {
    console.log("error", error);
  }
};

export default startApollo;
