const express= require('express');
const mongoose = require('mongoose');
const router= require('./routes/route')
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://gauravpandey:fDgbasXuhPjF0P7O@cluster0.8qgdd94.mongodb.net/").then(()=>console.log("database connected successfully")).catch((err)=>console.log(err));
app.use('/',router);
app.listen(8000, ()=>{
    console.log("server started on localhost 8000");
})

// today we will learn about databases and connection
// SQL -> relational database , it stores in tables ex: MySQL , PostGre SQL 
// NoSQL-> documented database or schemaless, stores in documents in bson ( Binary JSON) style , ex: MongoDB

//username: gauravpandey , password: fDgbasXuhPjF0P7O
// connection string: mongodb+srv://gauravpandey:fDgbasXuhPjF0P7O@cluster0.8qgdd94.mongodb.net/