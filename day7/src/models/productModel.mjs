import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     price:{
        type:Number,
        required:true
     },
     productId:{
        type:String, 
        unique:true,
        required:true
     },
     category:{
        type:String,
        required:true,
        enum:{
            values:["laptop","books","smartphone","smartwatch"],
            message:"choose valid category"
        }
     },
     quantity:{
        type:Number,
        required:true
     },
     status:{
        type:Boolean,
        required:true,
        default:true
     }
     }
,{timestamps:true});
export default mongoose.model("products", productSchema);