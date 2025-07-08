import dotenv from 'dotenv'
dotenv.config();
const URI= process.env.MongoDB;
const PORT= process.env.PORT;
const secretMessage= process.env.secretMessage;
export {URI, PORT, secretMessage};