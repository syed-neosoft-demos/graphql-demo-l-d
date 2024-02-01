export const productTypes = `#graphql
    type Product {
      _id:String
      userId: String!
      title: String!
      description: String!
      price:Int
      discountPercentage:Int
      rating:Int
      stock:Int
      brand:String
      category:String
      thumbnail:String
      images:String
      user: [User]
    }
  `;

export const productQuery = `#graphql
    getProduct(productId:String!): Product
    getAllProduct: [Product]
  `;
export const productMutation = `#graphql
    createProduct( userId: String!, title: String!, description: String!, price: Int!, discountPercentage:Int!, rating:Int!, stock:Int!, brand:String!,category:String!, thumbnail:String!, images:String! ): String
    updateProduct(email: String!, password: String!): String
    deleteProduct(email: String!, password: String!): String
  `;

export const ProductTypeDefs = { productTypes, productQuery, productMutation };
