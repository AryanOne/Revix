import express, { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router=express.Router();
const prisma=new PrismaClient();

router.post("/signup",async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400).send("Missing fields");
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

router.post("/login",async(req:Request,res:Response)=>{
    
    const {email,password}=req.body;

    if(!email || !password){
        res.send("Missing Fields");
        return;
    }
    
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

router.post('/logout',(req:Request,res:Response)=>{
    res.clearCookie("token");
    res.send("Logout Successfull")
})

router.get('/profile', async (req: Request, res: Response) => {
    const token = req.cookies.token;
    if (!token) {
        res.send("Not logged in");
        return;
    }    

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
        const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
        if (!user){
            res.send("User not found");
            return;
        }
        res.send(`Welcome ${user.username}`);
    } catch {
        res.send("Invalid token");
    }
});

export default router;