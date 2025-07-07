import express from 'express'
import mongoose from 'mongoose'
import { PORT, URI } from './config.mjs';
import route from "./src/routes/route.mjs";
const app= express();
// application level middleware
app.use(express.json());  // express.json ( builtin middleware)
// app.use(body-parser.json());  // third party middleware
mongoose.connect(URI).then(()=>console.log("Database connected Successfully")).catch((err)=>console.log(err));
// custome middleware and error handling middleware
app.use('/', (err,req,res,next)=>{
    let name="pma"
    if(name!=="pma"){
        return res.send({"status":"failed", message: "authentication failed"})
    }
    console.log(err.stack);
    next();

})
app.use('/', (req,res,next)=>{
    let err=false;
    if(err){
        throw new Error("this is an custome error message");
    }
    next();
})
// router level middleware
app.use('/', route);
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})
