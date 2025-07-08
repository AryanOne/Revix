import express, { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";

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
                username:username,
                email,
                password:hashPassword
            }
        })
        res.json({
            user
        })
    }catch(err){
        console.log(err);
        res.send("Something went wrong..")
    }
    
});

app.listen(7070, () => {
    console.log("started at http://localhost:7070");
});
