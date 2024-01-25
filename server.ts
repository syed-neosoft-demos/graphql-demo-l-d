import "dotenv/config";
import express from "express";

import globalError from "./src/errors/globalErrors";
import userRoute from "./src/routes/userRoute";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "server is up and running" });
});

app.use("/v1/user", userRoute);
app.use("/v1/auth", userRoute);

//GLOBAL ERRORS
globalError(app);
