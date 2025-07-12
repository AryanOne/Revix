import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import jwt from "jsonwebtoken";

const prisma =new PrismaClient();

const userAuth=async(req:Request,res:Response,next:NextFunction)=>{
    const token = req.cookies.token;
    if (!token) {
        res.status(401);
        return;
    }    

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
        const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
        if (!user){
            res.status(403);
            return;
        }
        next();
    } catch {
        res.send("Invalid token");
    }
}

export default userAuth;