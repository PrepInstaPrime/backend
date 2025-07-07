import jwt from 'jsonwebtoken';
import { secretMessage } from '../../config.mjs';
const authentication = async (req, res,next )=>{
 try {
    let token = req.headers["authorization"];
    // console.log(token)
    token = token.replace("Bearer ","");
    let decodeToken=jwt.verify(token,secretMessage,(err,decode)=>{
        if(err){
            return res.status(401).send({status:"failed", message:"authentication failed"})
        }
        return decode;
    })
    req.loginToken=decodeToken;
    console.log(decodeToken);
    next();

 } catch (error) {
    return res.status(500).send({status:"failed", message:error.message});
 }
}
const authorization= async (req,res,next)=>{
    try {
        let userId= req.loginToken.id;
        console.log(userId);
        let id=req.params.userid;
        if(userId!==id){
            return res.status(403).send({status:"failed", message:"authorization failed"})
        }
        next();

    } catch (error) {
        return res.status(500).send({status:"failed", message:error.message});
    }
}
export {authentication, authorization}