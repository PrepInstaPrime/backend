import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
     "name":String,
     "email":String,
     "Phone": String,
     "age":Number,
     "password": String
},{timestamps:true})
export default mongoose.model("users", userSchema);