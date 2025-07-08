import userModel from "../models/userModel.mjs";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secretMessage } from "../../config.mjs";
const registerUser= async (req,res)=>{
    try {
        let data= req.body;
        let pass= data.password;
        let password= await bcrypt.hash(pass,10);
        data.password=password;
        let user= await userModel.create(data);
        return res.status(201).send({status:"ok", message:user});

    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message})
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message})
        }else{
            return res.status(500).send({status:"failed", message:error.message})
        }
    }
}
const login =async (req,res)=>{
    try {
        let {email, password}= req.body;
        let user= await userModel.findOne({email:email});
        let dbpass= user.password;
        let check= await bcrypt.compare(password,dbpass);
        if(!check){
            return res.status(401).send({status:"failed", message:"authentication failed"})
        }
        let token = jwt.sign({email:email, id:user._id},secretMessage,{expiresIn:"24h"});
        if(!token){
            return res.status(500).send({status:"failed", message:"try again later"});
        }
        res.header(token);
        return res.status(200).send({status:"ok", message:{token:token, id:user._id}});

    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message})
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message})
        }else{
            return res.status(500).send({status:"failed", message:error.message})
        }
    }
}
const getUsers= async (req,res)=>{
    try {
        let data= await userModel.find();
        return res.status(200).send({status:"ok", message:data});
    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message})
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message})
        }else{
            return res.status(500).send({status:"failed", message:error.message})
        }
    }
}
const updateUser= async (req,res)=>{
    try {
        let id= req.params.userid;
        let data= req.body;
        await userModel.findOneAndUpdate({_id:id}, {$set:data});
        let newUser= await userModel.findById(id);
        return res.status(200).send({status:"ok", message:newUser});
    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message})
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message})
        }else{
            return res.status(500).send({status:"failed", message:error.message})
        }
    }
}

export {registerUser,login,getUsers,updateUser}