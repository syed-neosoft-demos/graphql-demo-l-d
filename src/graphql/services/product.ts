import { GraphQLError } from "graphql";
import productModel from "../../models/productModel";
import { Create, Delete, Update } from "../../types/product.definition";

export const getProduct = async (productId: string) => {
  try {
    const product = await productModel.findOne({ _id: productId });
    return product;
  } catch (error: any) {
    throw new GraphQLError(error?.message, {
      extensions: { code: "FAILEDTOFETCH" },
    });
  }
};
export const getAllProduct = async () => {
  try {
    const products = await productModel.find({}).limit(20);
    return products;
  } catch (error: any) {
    throw new GraphQLError(error?.message, {
      extensions: { code: "FAILEDTOFETCH" },
    });
  }
};

export const createProduct = async (payload: Create) => {
  console.log("payload", payload);
  const user = await productModel.create(payload);
  return user?._id;
};

export const updateProduct = async (payload: Update) => {
  console.log("payload", payload);
  const user = await productModel.create(payload);
  return user?._id;
};

export const deleteProduct = async (payload: Delete) => {
  console.log("payload", payload);
  const user = await productModel.create(payload);
  return user?._id;
};
