import express from 'express'
const router = express.Router();
import { createUser } from '../controllers/userController.mjs';
router.get('/', function(req,res){
    return res.status(200).send({status:"ok", message:"api is running"})
})
router.post('/register',createUser);
export default router;
