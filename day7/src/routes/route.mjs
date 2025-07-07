import express from 'express';
import { createProduct, deleteProduct, updateProduct, updateQuantity } from '../controllers/productController.mjs';
const router= express.Router();
router.get('/', (req,res)=>{
    return res.status(200).send({status:"ok", message:"backend connected"})
})
router.post('/addproduct',createProduct);
router.put('/updateproduct/:id', updateProduct);
router.patch("/buy/:id",updateQuantity);
router.delete("/delete/:id", deleteProduct)
export default router;