import userModel from "../models/userModel.mjs";
const createUser= async (req, res)=>{
    try{
        const data= req.body;
    data.age= parseInt(data.age);
    // console.log(data);
    let response = await userModel.create(data);
    return res.send({status: "ok", user:response});
    }catch(err){
        return res.send({status:'failed', errMsg:err.message});
    }
    
}
export {createUser};