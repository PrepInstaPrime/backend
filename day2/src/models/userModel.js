const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
    'name':String,
    'age':Number,
    'email':String,
    'phone':String
},{timestamps:true});
module.exports=mongoose.model('UserData',userSchema);