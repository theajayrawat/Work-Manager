 import { NextResponse } from "next/server";
 import {User} from "@/models/user"
 import bcrypt from "bcryptjs"
 import jwt from "jsonwebtoken";

export async function POST(request){
    const {email, password}= await request.json()
    try {

        //1.check user
        const user=await User.findOne({
            email:email,
        })

        if(user==null){
            throw new Error("User not found")
        }
        
        //2.check password
        const matched=bcrypt.compareSync(password, user.password)

        if(!matched){
            throw new Error("Password not match")
        }

        //3.Generate token
        const token=jwt.sign({
            _id:user._id,
            name:user.name,

        },process.env.JWT_KEY)

        //4.Send Response as cookie or Header
        const response=NextResponse.json({
            message:"Login success",
            success:true
        })

        response.cookies.set("loginToken",token, {
            expiresIn: "1d", 
            httpOnly:true
        })

        return response
         
    } catch (error) {
        return NextResponse.json({
            message:error.message,
            success:false,
        },{
            status:500,
        })
    }
}