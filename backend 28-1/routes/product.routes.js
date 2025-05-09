import express from 'express';
import { createProdect, getAllProduct, getProductById } from '../controllers/product.controller.js';
import { authMiddleWare } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';
const productRouter =express.Router();
productRouter.post("/create-product",upload.single("image"),authMiddleWare,createProdect);
productRouter.get("/get-all-product",getAllProduct);
productRouter.get("/get-product-by-id/:id",getProductById);


export {productRouter};