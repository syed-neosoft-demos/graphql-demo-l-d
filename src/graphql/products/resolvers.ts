import { Create, Delete, Update } from "../../types/product.definition";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../services/product";

export const userQuery = {
  getProduct: async (_: any, args: any, context: any) => {
    return await getProduct(context?.auth?.userId as string);
  },
  getAllProduct: async () => await getAllProduct(),
};
export const userMutation = {
  createProduct: async (_: unknown, args: Create) => await createProduct(args),
  updateProduct: async (_: unknown, args: Update) => await updateProduct(args),
  deleteProduct: async (_: unknown, args: Delete) => await deleteProduct(args),
};

export const UserResolvers = { userQuery, userMutation };
