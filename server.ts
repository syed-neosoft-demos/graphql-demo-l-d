import "dotenv/config";
import express from "express";

import globalError from "./src/errors/globalErrors";
import appError from "./src/middleware/appError";
import userRoute from "./src/routes/userRoute";

const app = express();

//MIDDLE WARE
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "server is up and running" });
});

//ROUTES
app.use("/v1/user", userRoute);

//ERROR MIDDLEWARE
app.use(appError);

app.listen(process.env.PORT, () => console.log("server is and running"));

//GLOBAL ERRORS
globalError(app);
