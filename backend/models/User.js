import mongoose from "mongoose";
import {randomUUID} from 'crypto'



const userSchema = new mongoose.Schema({
    user_id: {type:String,unique:true,default:randomUUID(), },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});


export default mongoose.model("User",userSchema);