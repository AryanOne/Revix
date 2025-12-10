"use client"

import { useEffect, useState } from "react";
import HeaderComp from "./components/HeaderComp";
import LeftScrollBar from "./components/LeftScrollBar";
import LeftSideBar from "./components/LeftSideBar";
import RightScrollBar from "./components/RightScrollBar";
import "./globals.css";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  const [showLeft,setShowLeft]=useState(true);
  const [showRight,setShowRight]=useState(true);

  useEffect(()=>{
    const browserScreenSize=()=>{
      setShowLeft(window.innerWidth>918) 
      setShowRight(window.innerWidth>1274)
    }

    window.addEventListener("resize",browserScreenSize);
    return ()=>{
        window.removeEventListener("resize",browserScreenSize);
    }
  },[])

  return (
    <html lang="en">
      <body className="bg-[#23272F] text-white">
        <HeaderComp/>
        <LeftSideBar/>
        {showLeft && <LeftScrollBar/>}
        {showRight && <RightScrollBar/>}
        <main
         className={`
            mt-16 
            ${showLeft ? "ml-80" : "ml-16"} 
            ${showRight ? "mr-64" : ""}
            transition-all
          `}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
