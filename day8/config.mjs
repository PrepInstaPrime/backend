import dotenv from 'dotenv';
dotenv.config();
const PORT=process.env.PORT;
const URI= process.env.MongoDB;
const secretMessage= process.env.tokenMessage;
export {PORT, URI,secretMessage};