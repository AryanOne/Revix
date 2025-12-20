'use client'

import { useState } from "react";

export default function RightSideBar(){
    const [toggle,setToggle]=useState(true);
    const onHandleClick=()=>{
        setToggle(!toggle);
    }
       
    return(
        <>
            <div className="block min-[1150px]:hidden">
                <div onClick={onHandleClick} 
                className={`fixed right-0 top-0 
                ${toggle?"": "w-100 h-full bg-[#1C1D21]"}`}>
                    Right Side Bar
                </div>
            </div>
            <div className="hidden min-[1150px]:block fixed w-100 h-full bg-[#1C1D21] right-0 top-0">
                Right Side Bar
            </div>
        </>
        
    )
}
