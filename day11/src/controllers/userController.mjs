import userModel from "../models/userModel.mjs";
import { uploadImage } from "../aws/aws.mjs";
const createUser= async (req,res)=>{
  try {
     let data= req.body;
     let {name, email, password}=data;
     let files= req.files;
    //  console.log(files);
     let address= JSON.parse(req.body.address);
     let imageUrl=null;
     if(files&&files.length>0){
        imageUrl=  await uploadImage(files[0]);
     }
     const user= await userModel.create({name:name, email:email, password:password, address:address,imageFile:imageUrl });
     return res.status(201).send({status:"ok", message:user})

  } catch (error) {
    if(error.message.includes("validation")){
        return res.status(400).send({status:"failed", message:error.message})
    } else if(error.message.includes("duplicate")){
        return res.status(400).send({status:"failed", message:error.message})
    } else{
        return res.status(400).send({status:"failed", message:error.message})
    }
  }
}
export {createUser};