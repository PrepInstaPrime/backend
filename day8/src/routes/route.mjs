import express from 'express';
import { getUsers, login, registerUser, updateUser } from '../controllers/userController.mjs';
import { authentication, authorization } from '../auth/auth.mjs';
const router= express.Router();
router.post("/register",registerUser);
router.post("/login", login);
router.get("/users", authentication,getUsers);
router.put("/update/:userid",authentication,authorization,updateUser);
export default router;