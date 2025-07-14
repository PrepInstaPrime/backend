import dotenv from 'dotenv';
dotenv.config();
const accessKeyId= process.env.accessKeyId;
const secretAccessKey=process.env.secretAccessKey;
const region = process.env.region;
const mongodb=process.env.MongoDB;
const PORT= process.env.PORT;
export {accessKeyId, secretAccessKey, region, mongodb, PORT}
