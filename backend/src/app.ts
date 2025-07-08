import express, { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const prisma=new PrismaClient();

app.use(express.json());

app.post("/signup",async (req: Request, res: Response) => {
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

app.post("/login",async(req:Request,res:Response)=>{
    
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

app.post('/logout',(req:Request,res:Response)=>{
    res.clearCookie("token");
    res.send("Logout Successfull")
})

app.listen(7070, () => {
    console.log("started at http://localhost:7070");
});
