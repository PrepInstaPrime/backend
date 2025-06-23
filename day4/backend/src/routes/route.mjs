import express from 'express';
const router = express.Router();
import { createUser } from '../controllers/userController.mjs';
router.get('/', function(rewq,res){
    return res.send("api is running")
})
router.post('/register',createUser);
export default router;