import userModel from "../../models/userModel";
import { User } from "../../types/user.definition";
import { hashPassword } from "../../utils/password";

class UserServices {
  public static async getUser() {
    const users = await userModel.find({}).limit(20);
    return users;
  }
  public static async getAllUser() {
    const users = await userModel.find({}).limit(20);
    return users;
  }
  public static async createUser(payload: User) {
    console.log("payload", payload);
    const hashPass = await hashPassword(payload?.password);
    const user = await userModel.create({ ...payload, password: hashPass });
    console.log("user", user);
    return user?._id;
  }
}

export default UserServices;
