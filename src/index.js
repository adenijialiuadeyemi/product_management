import express from "express"
//import { PORT, mongoDbURL } from './config.js'
import mongoose from "mongoose";
import productsRoute from "./routes/productsRoute.js"

//creating the web server
const app = express();

//middleware for json
app.use(express.json())

//creating a first route
app.get("/", (req,res)=>{
    return res.status(200).send("Welcome to InternPulse Product Management System..")
})

app.use("/product", productsRoute)

mongoose.connect(mongoDbURL)
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Server running at the address: http://127.0.0.1:${PORT}`)
        })
        console.log("DB Connected successfully!!!")
    })
    .catch((err)=>{
        console.log(err)
})