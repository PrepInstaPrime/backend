const express =require('express')
const route= require("./routes/route")
const app=express();
app.use(express.json());
app.use('/',route);
app.listen(8000, ()=>{
    console.log(" server is running on localhost:8000");
})

