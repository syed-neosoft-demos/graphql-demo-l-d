const typeDefs = `#graphql
    type User {
      email: String
      username: String
      password:String
      fullName: String
    }
    type Query {
      getUser: [User]
      getAllUser: [User]
    }
    type Mutation{
       createUser(email: String!, username: String, fullName: String!, password: String!): String
    }
  `;
export default typeDefs;
