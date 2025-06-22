const express= require('express');
const mongoose= require('mongoose');
const route= require('./routes/route')
const app= express();
app.use(express.json());
mongoose.connect("mongodb+srv://gauravpandey:fDgbasXuhPjF0P7O@cluster0.8qgdd94.mongodb.net/blogging").then(()=>console.log("database connected successfully")).catch((err)=>console.log(err));
app.use('/',route);
app.listen(8000, ()=>{
    console.log("server started on port 8000");
})