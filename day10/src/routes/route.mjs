import express from "express";
import { getUsers, registerUser } from "../controllers/userController.mjs";
const router= express.Router();
router.post("/register", registerUser);
router.get("/users", getUsers);
export default router;