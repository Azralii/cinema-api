import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'
import { mongoConnection } from "./config/db.js";
import userRoute from "./routes/userRoute.js"

const  app = express();
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors('*'))
app.get("/",(req,res)=>{
    res.send("hello Libaan")
})
//app.use(bodyParser());
const port = process.env.PORT ;

app.use('/auth',userRoute)

app.listen(port,()=>{
console.log(`server running on port ${port}`)
mongoConnection()
});