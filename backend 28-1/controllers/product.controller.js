import { productModel } from "../models/product.models.js";
import { response } from "../utils/response.js";

export let createProdect=async (req,res)=>
{
    try
    {
        const {title,price,description}=req.body;
        let newProduct =new productModel({title,price,description,image:req.file.filename,author:req.body.userId})
        let productData=await newProduct.save();
        return response(res,productData,"Product added");
            
    }
    catch(error)
    {
        return response(res,null,error.message,false,500)
    }
}

export let getAllProduct=async (req,res)=>
{
    try
    {
        let productData=await productModel.find();
        return response(res,productData,"get all data");
    }
    catch(error)
    {
        return response(res,null,error.message,false,500)
    }
}

export let getProductById=async (req,res)=>
{
    try
    {
        let productid=req.params.id;
        let productData=await productModel.findById(productid);
        if(productData!=null)
            return response(res,productData,"data fetched");
        else
        {
            return response(res,null,"Product not find",false,500)
        }
    }
    catch (error)
    {
        return response(res,null,error.message,false,500)
    }
}