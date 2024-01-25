import express from "express";
import { login, resetPassword, signup } from "../controllers/userController";
import { signupValidate } from "../middleware/validate";

const router = express.Router();

router.post("/signup", signupValidate, signup);
router.post("/login", login);
router.post("/reset", resetPassword);

export default router;
