const userModel=require('../models/userModel');
const createUser=async (req, res)=>{
    const data=req.body;
    const createdUser= await userModel.create(data);
    return res.send({status: "ok", data: createdUser})
}
module.exports=createUser;