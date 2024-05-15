// In your router file (e.g., userRoutes.js)
import express from "express";
import { signup, login, userProfile } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", userProfile); // New route to view user profile

export default router;
