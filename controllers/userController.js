import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'


export const signUp = async(req,res)=>{
const {name,email,password}=req.body;
if(name===""||email==="" || password===''){
    res.json({message:'every field must be filled'})
}
const hashPassword = await bcrypt.hash(password,10)
await User.create({name,email,password:hashPassword})
res.json({message:'registration successful'});
}

export const login = async (req,res)=>{
    const {email,password}= req.body;
    if(email===""&&password===""){
        res.json({message:'Each field is required'})

    }
    const existingUser= await User.find({email})
  res.json({user:existingUser})

}