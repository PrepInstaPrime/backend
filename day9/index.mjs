import express from 'express';
import mongoose from 'mongoose';
import { PORT, URI } from './config.mjs';
import router from './src/routes/route.mjs';
const app= express();
app.use(express.json());
mongoose.connect(URI,{useNewURLParser:true}).then(()=>console.log("database connected successfully")).catch((err)=>console.log(err.message));
app.use('/',router);
app.listen(PORT,()=>{
    console.log(`server started on localhost:${PORT}`);
})
