const express= require('express');
const {createUser, getUsers,updateUser, deleteUser, restrict}= require('../controllers/userController');
const router= express.Router();
router.get('/test', (req, res)=>{
    return res.send("connected successfully")
})
router.post('/createuser', createUser);
router.get('/users', getUsers)
router.post('/update',updateUser)
router.post('/deleteuser', deleteUser)
router.post("/restrict", restrict)
module.exports=router;