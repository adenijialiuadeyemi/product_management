import express from "express"
import { Product } from "../models/productsModel.js"

//setting up the router
const router = express.Router()

//creating a new product
router.post("/", async (req,res)=>{
    try{
        if (!req.body.productName){
            return res.status(400).send({
                message: "All fields are required please"
            })
        }
        const newProduct = {
            productName:req.body.productName,
        }
        const product = await Product.create(newProduct)

        return res.status(200).send(product)

    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: err.message
        })
        
    }
})

//Retrieving all products
router.get("/", async (req,res)=>{
    try{
        const products = await Product.find()
        return res.status(200).send({
            count: products.length,
            data:products
    })
    }catch(err){
        console.log(err)
        return res.status(500).send({
            message: err.message
        })
    }
})

//Retrieving a single product
router.get("/:id", async (req,res)=>{
    try{
        const { id } = req.params
        const product = await Product.findById(id)
        if (!product){
            return res.status(404).send({
                message: "Product not found"
            })
        }
        return res.status(200).send(product)
    }catch(err){
        console.log(err)
        return res.status(500).send({ message: err.message })
    }
})

//Updating product information
router.put("/:id", async (req,res)=>{
    try{
        if (!req.body.productName){
            return res.status(400).send({message:"All fields are required"})
        }
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product){
            return res.status(404).send({
                message:"Product not found"
            })
        }
        return res.status(200).send({
            message:"Product updated successfully",
            data:product
        })
    }catch(err){
        console.log(err)
        return res.status(500).send({message:err.message})
    }
})

// Deleting a product
router.delete("/:id", async (req,res)=>{
    try{
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)

        if (!product){
            return res.status(404).send({
                message:"Product not found"
            })
        }
        return res.status(200).send({
            message:"Product deleted successfully"
        })
    }catch(err){
        console.log(err)
        return res.status(500).send({message:err.message})
    }
})

export default router;