import User from "../models/userModel.js";


export const signUp = async(req,res)=>{
const {name,email,password}=req.body;
if(name===""||email==="" || password===''){
    res.json({message:'every field must be filled'})
}
await User.create({name,email,password})
res.json({message:'registration successful'});
}