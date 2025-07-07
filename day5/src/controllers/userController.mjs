import userModel from "../models/userModel.mjs";
const createUser=async (req, res)=>{
    // learn regex from here: https://www.geeksforgeeks.org/javascript/javascript-regexpregular-expression/ 
    try {
        let data= req.body;
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
export {createUser}