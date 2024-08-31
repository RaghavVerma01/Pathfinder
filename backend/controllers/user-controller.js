
import User from "../models/User.js"

import {hash,compare} from 'bcrypt';
import { createToken } from "../utils/token-manager.js";
import { cookieName } from "../utils/constants.js";


export const getAllusers = async (req,res)=>{
    //gets all users
    try {
        const users = await User.find();
        return res.status(200).json({message:"OK",users});

    } catch (error) {
        console.log(error);
        return res.json({message:"ERROR",cause:error.message})
    }
};

// Sign Up Handler
export const userSignUp = async(req,res)=>{
    try {
        const {name, email,password} = req.body;
        // Checking if user with this email exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(401).send("User already registered")
        }
        // Hashing User's Password
        const hashedPassword = await hash(password,10)

        const user = new User({name,email,password:hashedPassword});
        await user.save();

        // Create cookies for new user
        res.clearCookie(cookieName,{
            httpOnly:true,
            path:'/',
            domain:process.env.DOMAIN,
            signed:true,
        })

        const token = createToken(user._id.toString(),user.email,"7d");
        const expires = new Date();
        expires.setDate(expires.getDate()+7);
        res.cookie(cookieName,token,{
            path:'/',
            domain:process.env.DOMAIN,
            expires,
            httpOnly:true,
            signed:true,
        })
        
        return res.status(201).json({message:"OK",id:user._id.toString()})
        
    } catch (error) {
        console.log(error);
        return res.json({message:"ERROR",cause:error.message});
    }

};

// Login Handler

export const userlogin = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        // if user does not exist, then send not found message.
        if(!user){
            return res.status(401).send("User not found")
        }

        const passwordCheck = await compare(password,user.password);
        if(!passwordCheck){
            return res.status(403).send("Incorrect Password");
        }

        res.clearCookie(cookieName,{
            httpOnly:true,
            path:'/',
            domain:process.env.DOMAIN,
            signed:true,
        })

        const token = createToken(user._id.toString(),user.email,"7d");
        const expires = new Date();
        expires.setDate(expires.getDate()+7);
        res.cookie(cookieName,token,{
            path:'/',
            domain:process.env.DOMAIN,
            expires,
            httpOnly:true,
            signed:true,
        })

        return res.status(200).json({message:"OK",id:user._id.toString()})
    } catch (error) {
        console.log(error);
        return res.json({message:"ERROR",cause:error.message});
    }
}