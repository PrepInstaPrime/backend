import aws from 'aws-sdk';
import { accessKeyId, secretAccessKey, region } from '../../config.mjs';
aws.config.update({
    accessKeyId:accessKeyId, 
    secretAccessKey:secretAccessKey,
    region:region
});
const uploadImage = async (file)=>{
    return new Promise((resolve, reject)=>{
        // creating our service
        let s3= new aws.S3();
        const uploadParams={
            ACL:"public-read",
            Bucket:"pma-training",
            Key:"pma/"+file.originalname,
            Body:file.buffer
        }
        /*
            ACL:Access Control List,
            Bucket:s3 container name,
            Key: address or file name on aws
            Body:binary data ( images , audio or video)
        */
        s3.upload(uploadParams, (error, data)=>{
            if(error){
                return reject({error:error})
            }
            console.log("file uploaded successfully")
            return resolve(data.Location);
        })

    })
}
export {uploadImage};
