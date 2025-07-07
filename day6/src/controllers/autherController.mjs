import authorModel from "../models/authorModel.mjs";
const createAuthor=async (req, res)=>{
    try {
        let data= req.body;
        let response= await authorModel.create(data);
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
const listAuthor= async (req,res)=>{
    try {
        let data= await authorModel.find({$and:[{age:{$lte:22}},{title:"Mr"}]});
        return res.status(200).send({status: "ok", message:data});
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
export {createAuthor, listAuthor}