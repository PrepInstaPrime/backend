import mongoose from "mongoose";
const blogSchema= new mongoose.Schema({
    "topic":{
        type: String,
        required: true,
        maxLength:150
    },
    "Category":{
        type: String,
        enum:{
            values:["technical", "political", "educational", "motivational", "social", "reasearch", "scientific", "economy", "finance"],
            message:"Invalid content, you can only enter listed topics"
        },
        required:true
    },
    "Content":{
        type: String,
        required: true
    },
    "writer":{
        type: mongoose.Schema.ObjectId,
        ref:"Author",
        required:true
    }
},{timestamps:true});
export default mongoose.model("blogs", blogSchema);