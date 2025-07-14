import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name:{
        type:String, 
        required: true
    }, 
    email:{
        type: String,
        required: true,
        unique: true
    },
    imageFile:{
        type:String, 
        required:true
    },
    password:{
        type:String
    },
    address:{
        permanentAddress:{
            street:String,
            city:String
        },
        currentAddress:{
            street:String,
            city:String
        }
    }
},{timestamps:true});
export default mongoose.model("users", userSchema);
