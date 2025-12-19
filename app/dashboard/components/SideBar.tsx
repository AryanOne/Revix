'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideBar(){

    return (
        <div className="bg-[#141416] w-72 fixed p-7 h-full">
            <div className="text-2xl mt-3 mb-8">Dash</div>
            <div>
                <PageLinks name="Home" location="/dashboard"/>
                <PageLinks name="About" location="/course"/>
            </div>
        </div>
    )
}

type PageLinkType={
    name:string,
    location:string
}

function PageLinks({name,location}:PageLinkType){
    const pathName=usePathname();
    return(
        <div className={`p-4 rounded-xl 
            ${pathName === location?"border-2 border-white/2 bg-[#1f2129] shadow-[inset_0_1px_2px_rgba(255,255,255,0.06)]":""}`}>
            <Link href={location}>
                {name}
            </Link>
        </div>
    )
}