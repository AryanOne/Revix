import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma =new PrismaClient();

const userExist=async(req:Request,res:Response,next:NextFunction)=>{
    const { email } = req.body;

    const user=await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(!user){
        res.send("User doesnt exist");
        return;
    }

    next();
}

export default userExist;