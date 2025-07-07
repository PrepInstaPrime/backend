import blogModel from "../models/blogModel.mjs";
const createBlog=async (req, res)=>{
    try {
        let data= req.body;
        let response= await blogModel.create(data);
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
const readBlog=async (req,res)=>{
    try {
        const blog= await blogModel.find().populate("writer");
        return res.status(200).send({status: "ok", message: blog});
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
export {createBlog, readBlog}