const userTypes = `#graphql
    type User {
      email: String
      username: String
      password:String
      fullName: String
    }
  `;

const userQuery = `#graphql
    getUser: User
    getAllUser: [User]
  `;
const userMutation = `#graphql
    signup(email: String!, username: String, fullName: String!, password: String!): String
    login(email: String!, password: String!): String
  `;

export const UserTypeDefs = { userTypes, userQuery, userMutation };
