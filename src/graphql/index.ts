import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { NextFunction, Request, Response } from "express";
import userResolvers from "./users/resolvers";
import userTypeDefs from "./users/typeDefs";

const authDemo = (param: any) => {
  console.log("authDemo", authDemo);
};
const startApollo = async (app: any) => {
  try {
    const server = new ApolloServer({
      typeDefs: userTypeDefs,
      resolvers: userResolvers,
    });
    await server.start();
    app.use(
      "/graphql",
      expressMiddleware(server),
      async (req: Request, res: Response, next: NextFunction) => {
        // Middleware logic here
        const token = req.headers["token"];
        console.log("token", token);
        try {
          // const user = UserService.decodeJWTToken(token as string);
          // req.user = user; // Set the user in the request for later use
          next();
        } catch (error) {
          return res.status(401).json({ error: "Unauthorized" });
        }
      }
    );
  } catch (error) {
    console.log("error", error);
  }
};

export default startApollo;
