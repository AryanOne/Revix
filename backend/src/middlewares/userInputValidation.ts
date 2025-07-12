import express, { NextFunction, Request, Response } from "express";
import * as z from "zod"; 

const userCheck=z.object({
    username:z.string(),
    email:z.email(),
    password:z.string()
}).strict();

const userInput=(req:Request,res:Response,next:NextFunction)=>{
   const user = userCheck.safeParse(req.body);
   if(!user.success){
        res.json({
            message:"Invalid input"
        })
        return
   }
   next();
}

export default userInput;