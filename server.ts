import "dotenv/config";
import express from "express";

import globalError from "./src/errors/globalErrors";
import appError from "./src/middleware/appError";
import userRoute from "./src/routes/userRoute";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "server is up and running" });
});

app.use("/v1/user", userRoute);

//APP ERRORS
app.use(appError);

//GLOBAL ERRORS
globalError(app);
