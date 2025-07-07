import productModel from "../models/productModel.mjs";
const createProduct= async (req, res)=>{
    try {
        let data= req.body;
        const products = await productModel.find();
        let productId=data.name.replaceAll(" ",'')+products.length;
        data.productId=productId;
        const product= await productModel.create(data);
        return res.status(200).send({status:"ok", message:product});
    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message})
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message})
        }else{
            return res.status(500).send({status:"failed", message:error.message})
        }
    }
}
const updateProduct= async (req,res)=>{
    try {
        const id= req.params.id;
        const data= req.body;
        const product= await productModel.findByIdAndUpdate(id,data);
        const newProduct= await productModel.findById(id);
        return res.status(201).send({status:"ok", message:newProduct})
    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message})
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message})
        }else{
            return res.status(500).send({status:"failed", message:error.message})
        }
    }
}
const updateQuantity=async ( req,res)=>{
    try {
        const id= req.params.id;
        let quantity= req.body.quantity;
        let newProduct= await productModel.findById(id);
        const oldQ= newProduct.quantity;
        if(oldQ<quantity){
            return res.status(200).send({status:"ok", message:"requested quantity is not available"})
        }
        quantity=oldQ-quantity;
        const product= await productModel.findByIdAndUpdate(id,{$set:{quantity:quantity}});
        newProduct= await productModel.findById(id);
        return res.status(201).send({status:"ok", message:newProduct})
    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message})
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message})
        }else{
            return res.status(500).send({status:"failed", message:error.message})
        }
    }
}
const deleteProduct= async (req,res)=>{
    try {
        const id= req.params.id;
        const deleted= await productModel.findByIdAndDelete(id);
        return res.status(200).send({status:"ok", message:deleted})
    } catch (error) {
        if(error.message.includes("validation")){
            return res.status(400).send({status:"failed", message:error.message})
        }else if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message})
        }else{
            return res.status(500).send({status:"failed", message:error.message})
        }
    }
}
export {createProduct, updateProduct, updateQuantity, deleteProduct}