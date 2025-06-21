const express = require('express');
const createUser= require('../controller/userController')
const router= express.Router();
router.get('/', function(req,res){
    return res.send("this is working")
})
router.post('/createuser',createUser);

module.exports=router;