import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose"
import cors from 'cors'

dotenv.config()
const  app = express();

app.use(cors('*'))
app.get("/",(req,res)=>{
    res.send("hello Libaan")
})
//app.use(bodyParser());
const port = process.env.PORT ;


app.listen(port,async()=>{
console.log(`server running on port ${port}`)
const connect = await mongoose.connect(process.env.MONGO_URI)
 console.log("mongodb connected")
});