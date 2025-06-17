const express = require('express');
const router= express.Router();
router.get('/',function(req,res){
    res.send("hey this is coming from router")
})
router.post('/user',function(req,res){
    res.send("this is coming from post api")
})
router.post('/:name/:age',function(req,res){
    // we can access path params with the help of req.params
    let {name,age}=req.params;
    // we can access query params with the help of req.query
    let {college,sub}=req.query;
    console.log(college,sub);
    console.log(name, age)
    res.send(`Hey ${name}`);
})

router.post('/details', function(req,res){
    // with the help of req.body we can access the json data from the client body
    const data=req.body;
    console.log(data);
    res.send({"status":"ok", "data":data});
})
module.exports=router;