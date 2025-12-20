'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";

export default function SideBar(){
    
    const [toggle,setToggle]=useState(false);
    const onHandleClick=()=>{
        setToggle(!toggle);
    }

    return (
        <>
            <div className={`bg-[#141416] fixed h-full transition-[width,padding] duration-300 ease-in-out
            ${toggle ? "w-72 px-4 py-1" : "hidden xl:block w-20 py-1 px-2"}`}>

                <div className={`flex text-2xl  mb-8 ${toggle?"justify-end":"justify-center"} `} onClick={onHandleClick}>
                    <img src="/icons/Sidebar.png" alt="Bar" />
                </div>

                <div >
                    <PageLinks name="Home" location="/dashboard" toggle={toggle}/>
                    <PageLinks name="About" location="/course" toggle={toggle}/>
                </div>

            </div>
    
            {!toggle?
                <div className="block xl:hidden">
                    <div className="fixed top-2 left-3" onClick={onHandleClick}>
                        <img src="/icons/Sidebar.png" alt="" />
                    </div>
                </div>
            :""}
        </>
        
    )
}

type PageLinkType={
    name:string,
    location:string,
    toggle:boolean
}

function PageLinks({name,location,toggle}:PageLinkType){
    const pathName=usePathname();
    return(
        <Link href={location} >
        <div className={`flex p-4 rounded-xl border-2
            ${pathName === location?"border-white/2 bg-[#1f2129] shadow-[inset_0_1px_2px_rgba(255,255,255,0.06)]":"border-transparent"}`}>
                    <div>
                        <img src="/icons/Home.png" alt="Home"/>
                    </div>
                    <div className={toggle?`pl-1.5 pt-0.5`:""}>
                        {toggle?name:""}
                    </div>

        </div>
        </Link>
    )
}