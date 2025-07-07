import userModel from "../models/userModel.mjs";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { secretMessage } from "../../config.mjs";
const registerUser=async (req, res)=>{
    try {
        let data= req.body;
        let password = data.password;
        // encryption of password
        let hash= await bcrypt.hash(password,10);
        // console.log(hash);
        data.password=hash;
        let response= await userModel.create(data);
        return res.status(201).send({status:"ok", message:response});
    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message});
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message});
        }else{
            return res.status(500).send({status:"failed", message:error.message});
        }
    }
}
const login = async (req,res)=>{
    try {
        let {email, password}= req.body;
        let user= await userModel.findOne({email:email});
        // getting the stored password
        let dbpass= user.password;
        // comparing the stored and user password
        let result= await bcrypt.compare(password, dbpass);
        // console.log(result)
        if(!result){
            return res.status(401).send({status:"failed",message:"incorrect Password"});
        }
        let userId= user._id;
        let token = jwt.sign({id:userId, email:email},secretMessage,{expiresIn:"24h"});
        if(!token){
            return res.status(500).send({status:"failed", message:"try again later"})
        }
        res.setHeader('x-api-key',token);
        return res.status(200).send({"status":"ok", message:{userId,token}} );

    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message});
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message});
        }else{
            return res.status(500).send({status:"failed", message:error.message});
        }
    }
}
const getUsers=async (req,res)=>{
    try {
        let data= await userModel.find();
        return res.status(200).send({"status":"ok", message:data});
    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message});
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message});
        }else{
            return res.status(500).send({status:"failed", message:error.message});
        }
    }
}
const updateUser=async (req,res)=>{
    try {
        let id= req.params.userid;
        let data= req.body;
        let newUser= await userModel.findByIdAndUpdate(id,{$set:data})
        let updatedUser= await userModel.findOne({_id:id});
        return res.status(200).send({status:"ok", message:updatedUser})
    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message});
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message});
        }else{
            return res.status(500).send({status:"failed", message:error.message});
        }
    }
}

export {registerUser,login,getUsers, updateUser}