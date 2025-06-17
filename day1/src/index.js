// for creating server and accessing middlewares we need to import express
const express =require('express');
const route= require('./routes/route');
// we are creating app instance to use express
const app=express();
// defining our API and calling with help of middleware
/* 
app.use('/',function(req,res){
    res.send("hello this is my first ever API")
})
*/
// this express.json will allow us to read json data from the client
app.use(express.json());
app.use('/',route);
// creating my server on port 800 , app.listen is having two parameters 1. port , 2. call back. 
// here we are using callback to check whether our app is running or not 
app.listen(8000,()=>{
    console.log("server started")
})