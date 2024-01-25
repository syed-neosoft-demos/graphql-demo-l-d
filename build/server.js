"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const globalErrors_1 = __importDefault(require("./src/errors/globalErrors"));
const userRoute_1 = __importDefault(require("./src/routes/userRoute"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.status(200).json({ message: "server is up and running" });
});
app.use("/v1/user", userRoute_1.default);
app.use("/v1/auth", userRoute_1.default);
//GLOBAL ERRORS
(0, globalErrors_1.default)(app);
