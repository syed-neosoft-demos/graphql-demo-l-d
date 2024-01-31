import { Create, Delete, Update } from "../../types/product.definition";
import { isAuthorized } from "../services/common";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../services/product";

export const productQuery = {
  getProduct: async (_: any, args: any, context: any) => {
    await isAuthorized(context?.token);
    return await getProduct(args?.productId as string);
  },
  getAllProduct: async () => await getAllProduct(),
};
export const productMutation = {
  createProduct: async (_: unknown, args: Create, context: any) => {
    await isAuthorized(context?.token);
    return await createProduct(args);
  },
  updateProduct: async (_: unknown, args: Update) => await updateProduct(args),
  deleteProduct: async (_: unknown, args: Delete) => await deleteProduct(args),
};

export const ProductResolvers = { productQuery, productMutation };
