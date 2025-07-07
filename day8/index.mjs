import express from 'express';
import mongoose from 'mongoose';
import { PORT,URI } from './config.mjs';
import router from './src/routes/route.mjs';
const app= express();
app.use(express.json());
mongoose.connect(URI,{useNewURlParser:true}).then(()=>console.log("database connected")).catch((err)=>console.log(err));
app.use('/', router);
app.listen(PORT, ()=>{
    console.log("Server is running on port",PORT)
})

