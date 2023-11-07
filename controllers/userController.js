import User from "../models/userModel.js";


export const signUp = async(req,res)=>{
const {name,email,password}=req.body;
if(name===""||email==="" || password===''){
    res.json({message:'every field must be filled'})
}
await User.create({name,email,password})
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