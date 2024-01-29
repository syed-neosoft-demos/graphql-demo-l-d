import "dotenv/config";
import { connect } from "mongoose";

const dbConnect = async () => {
  try {
    await connect(process.env.MONGO_URI!);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
    console.log(error);
  }
};

export default dbConnect;
