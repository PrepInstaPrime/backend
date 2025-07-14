import userModel from "../models/userModel.mjs";
import { createClient } from 'redis';
const registerUser= async (req,res)=>{
    try {
        let data= req.body;
        let user= await userModel.create(data);
        // redis setup
        const client = createClient({
            username: 'PMA',
            password: 'O1V4GRB5J3ymgotPdUdV4kh7LiOZEzJJ',
            socket: {
                host: 'redis-11346.c11.us-east-1-2.ec2.redns.redis-cloud.com',
                port: 11346
            }
        });
        client.on('error', err => console.log('Redis Client Error', err));
        
        await client.connect();
        
        await client.set(data.name, JSON.stringify(data));
        const result = await client.get(data.name);
        return res.status(201).send({status:"ok", message:user, redisData: result});
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
const getUsers=async (req,res)=>{
    try {
        let pipeline= [
            { $match: { age:{$gte:20} } }, // Stage 1: Filter active documents
            { $group: { _id: '$role', total: { $sum: 1 } } }, // Stage 2: Group by category and count
            { $sort: { total: 1 } }, // Stage 3: Sort by total count in descending order // -1 for descending order and 1 for ascending 
            { $limit: 2 }
        ]
        
        let data= await userModel.aggregate(pipeline);
        return res.status(200).send({status: "ok", message:data});
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





export {registerUser, getUsers}