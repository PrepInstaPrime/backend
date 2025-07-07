import express from 'express'
import mongoose from 'mongoose'
import { PORT, URI } from './config.mjs';
import route from "./src/routes/route.mjs";
const app= express();
app.use(express.json());
mongoose.connect(URI).then(()=>console.log("Database connected Successfully")).catch((err)=>console.log(err));
app.use('/', route);
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})
