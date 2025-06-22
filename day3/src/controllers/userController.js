const userModel= require('../models/userModel');
const createUser= async (req,res)=>{
        const data= req.body;
        const email= data.email;
        if(!email){
            return res.send({status:"failed", msg: "enter the email"})
        }
        // const getdata= await userModel.find({email:email});
     
        const getdata= await userModel.findOne({email:email})
        console.log(getdata)
        if(getdata){
            return res.send({status: "failed", msg: "user already exist"})
        }
        const createdUser= await userModel.create(data);
        return res.send({status: "ok", data: createdUser});
}

const getUsers= async(req,res)=>{
       // try the method findById : HW
        const data= await userModel.find({status:true});
        return res.send({status:"ok", data: data});
}
const updateUser=async (req,res)=>{
    const data= req.body;
    const {email,password}= data;
    if(!email){
        return res.send({status:"failed", msg: "enter the email"})
    }
    // try updateMany and findByIdAndUpdate
    const getdata= await userModel.updateOne({email:email},{$set:{password:password}})
    console.log(getdata)
    return res.send({status:"true", data:getdata})

}
const deleteUser= async (req,res)=>{
    const data= req.body;
    const {email}= data;
    if(!email){
        return res.send({status:"failed", msg: "enter the email"})
    }
    const deletedUser= await userModel.deleteOne({email:email})
    return res.send({status: "ok", data:deletedUser})
}
const restrict= async (req,res)=>{
    // deactivate all the account those are having age less than 18
    const update= await userModel.updateMany({age:{$lt:18}},{$set:{status:false}});
    return res.send({status: "ok", data:update})
}
module.exports={createUser,getUsers,updateUser, deleteUser,restrict};