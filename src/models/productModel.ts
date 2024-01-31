import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
      default: 0.0,
    },
    discountPercentage: {
      type: Number,
      default: 0.0,
    },
    rating: {
      type: Number,
      default: 0.0,
    },
    stock: {
      type: Number,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
    },
    images: [
      {
        type: String,
        require: true,
      },
    ],
  },
  { timestamps: true }
);

const productModel = model("product", productSchema);
export default productModel;
