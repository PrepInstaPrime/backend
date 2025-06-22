const mongoose= require('mongoose');
const userSchema= new mongoose.Schema(
    {
        "name":String,
        "email":String,
        "phone":String,
        "age":Number,
        "password":String,
        "address":{
            "street":String,
            "houseNumber":Number,
            "state":String,
            "Country":String
        },
        "status":Boolean
    },{timestamps:true}
)
module.exports= mongoose.model("totaluser",userSchema);