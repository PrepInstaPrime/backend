import express from 'express';
import mongoose from 'mongoose';
import route from './src/routes/route.mjs';
import { PORT, URI } from './config.mjs';
import cors from 'cors';
const app=express();
app.use(express.json());
app.use(cors());
mongoose.connect(URI).then(()=>console.log("database connected successfully")).catch((err)=>console.log(err));
app.use('/', route);
app.listen(PORT, ()=>{
    console.log("server is running at the port", PORT)
})