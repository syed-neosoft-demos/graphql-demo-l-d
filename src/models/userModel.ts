import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      require: true,
    },
    username: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      select: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userModel = model("user", userSchema);
export default userModel;
