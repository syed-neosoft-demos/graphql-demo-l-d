export const userTypes = `#graphql
    type Product {
      title: String
      description: String
      price:Number
      discountPercentage:Number
      rating:Number
      stock:Number
      brand:String
      category:String
      thumbnail:String
      images:String
     
    }
  `;

export const userQuery = `#graphql
    getProduct: Product
    getAllProduct: [Product]
  `;
export const userMutation = `#graphql
    createProduct(email: String!, username: String, fullName: String!, password: String!): String
    updateProduct(email: String!, password: String!): String
    deleteProduct(email: String!, password: String!): String
  `;
