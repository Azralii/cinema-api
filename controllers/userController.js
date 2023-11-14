import Bookings from "../models/bookingModel.js";
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const signUp = async(req,res)=>{
const {name,email,password}=req.body;
if(name===""||email==="" || password===''){
    res.json({message:'every field must be filled'})
}
const hashPassword = await bcrypt.hash(password,10)
const user = await User.create({name,email,password:hashPassword})
const token = jwt.sign({ userId: user._id }, 'jsonwebsecerct', {
    expiresIn: '1h', 
});
res.json({message:'registration successful',token,user});
}

export const login = async (req,res)=>{
    const {email,password}= req.body;
    if(email===""&&password===""){
        res.json({message:'Each field is required'})

    }
    
    
    const existingUser= await User.findOne({email})
    const token = jwt.sign({ userId: existingUser._id }, 'jsonwebsecerct', {
        expiresIn: '1h', 
    });
  res.json({user:existingUser,token})

}


export const getMyBookings = async(req,res)=>{

    console.log(req.params)
    const userId = req.params.userId;
    try {
        const allbookings = await Bookings.find()
        const user = allbookings.filter(item=>item.userId == userId)
        console.log(user)
        if(user.length == 0){
            return res.status(404).json({message:'User does not book any film yet'})
        }
        res.status(200).json(user)
    } catch (error) {
        
    }
}
