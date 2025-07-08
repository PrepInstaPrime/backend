import express from "express";
import { getUsers, login, registerUser, updateUser } from "../controllers/userController.mjs";
import { authentication, authorization } from "../auth/authentication.mjs";
const router= express.Router();
router.get('/',authentication,getUsers);
router.post('/register', registerUser);
router.post('/login', login);
router.put("/update/:userid", authentication, authorization, updateUser);
export default router;