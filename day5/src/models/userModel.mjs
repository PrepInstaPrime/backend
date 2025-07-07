import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    "title":{
        type: String,
        enum:{
            values: ["Mr","Ms","Miss"],
            message:"only Mr, Ms and Miss is allowed "
        },
        required: true,
    },
    "name":{
        type:String,
        minlength:3,
        maxlength:50,
        validate:{
            validator:function(value){
                return /^[a-zA-Z1-9_]+$/.test(value)
            },
            message: props=>`${props.value} is not a valid username`
        }
    },
    "email":{
        type:String,
        unique:true,
        required: true
    },
    "phone":{
        type:String,
        maxlength:[10,"Phone number can't have more than 10 digits"],
        minlength:[10,"Phone number can't have less than 10 digits"]
    },
    "age":{
        type:Number,
        min:[18,"Age should more than 18 only then you can register"],
        max:200
    },
    "status":{
        type: Boolean,
        default:true
    }
},{timestamps:true});
export default mongoose.model("user",userSchema);