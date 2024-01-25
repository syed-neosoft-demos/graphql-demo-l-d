import express from "express";
import { login, resetPassword, signup } from "../controllers/userController";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/reset", resetPassword);

export default router;
