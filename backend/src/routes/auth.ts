import express, { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import userInput from "../middlewares/userInputValidation";
import userExist from "../middlewares/userExist";
import userAuth from "../middlewares/userAuthenticated";

const router=express.Router();
const prisma=new PrismaClient();

router.post("/signup",userInput,async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    const user=await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(user){
        res.send("User already exist");
        return;
    }

    try{
        const hashPassword=await bcrypt.hash(password,10)   
    
        const user=await prisma.user.create({
            data:{
                username,
                email,
                password:hashPassword
            }
        })

        const token=jwt.sign({userId:user.id},process.env.JWT_SECRET!,{ expiresIn: "7d" })

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",                          
            secure: process.env.NODE_ENV === "production", 
            maxAge: 1000 * 60 * 60 * 24 * 7           
        });

        res.send("Signup successfull");

    }catch(err){
        console.log(err);
        res.send("Something went wrong..")
    }
    
});

router.post("/login",userInput,async(req:Request,res:Response)=>{
    
    const {email,password}=req.body;
    
    const user=await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(!user){
        res.send("User doesnt exist");
        return;
    }

    const validPassword= await bcrypt.compare(password,user.password);

    if(!validPassword){
        res.send("Incorrect Password");
        return;
    }

    const token=jwt.sign({userId:user.id},process.env.JWT_SECRET!,{ expiresIn: "7d" });
    
    res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",                          
            secure: process.env.NODE_ENV === "production", 
            maxAge: 1000 * 60 * 60 * 24 * 7           
        });

        res.send("Login successfull");
})

router.post('/logout',userAuth,(req:Request,res:Response)=>{
    res.clearCookie("token");
    res.send("Logout Successfull")
})

export default router;