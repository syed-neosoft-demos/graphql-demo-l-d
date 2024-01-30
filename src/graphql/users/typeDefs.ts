const typeDefs = `#graphql
    type User {
      email: String
      username: String
      password:String
      fullName: String
    }
    type Query {
      getUser: User
      getAllUser: [User]
    }
    type Mutation{
       signup(email: String!, username: String, fullName: String!, password: String!): String
       login(email: String!, password: String!): String
    }
  `;
export default typeDefs;
