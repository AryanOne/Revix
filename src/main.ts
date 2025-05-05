import {argv} from "node:process";
import fs from "node:fs";

const args=argv;

if(args[2]==="init"){
    try{
        fs.mkdirSync(".lit",{recursive:true});
        fs.mkdirSync(".lit/objects",{recursive:true});
        fs.mkdirSync(".lit/refs",{recursive:true});
        fs.writeFileSync(".lit/HEAD","ref: refs/heads/main\n");
        console.log("lit intialized")
    }
    catch(e){
        console.log("error creating .lit ",e);
    }
}else{
    console.log("wrong input commmad");
}