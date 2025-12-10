"use client"

import { useEffect, useState } from "react";

export default function HeaderComp(){
    const [scrolled,setScrolled]=useState(false);
    
    useEffect(()=>{
        const handleScroll=()=>{
            setScrolled(window.scrollY>0);
        }

        window.addEventListener("scroll",handleScroll)

        return ()=>window.removeEventListener("scroll",handleScroll)
    },[])

    return (
        <div 
            className={`fixed top-0 z-10 h-16 w-full ${
            scrolled?
                "bg-[#23272F] border-b border-white/10 shadow-md":
                "bg-[#23272F]"}`
            }>
            Header Component
        </div>
    )
}

