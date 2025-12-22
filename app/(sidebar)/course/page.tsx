"use client";
import RightSideBar from "@/app/components/RightBar";
import { useEffect, useState } from "react";

export default function CourseDisplayPage(){
  const [text, setText] = useState("");
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: "Write an essay on Earth in 50 words",
        }),
      });

      const data = await res.json();
      setText(data.text);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!text) return;

    setDisplayed("");

    const words = text.split(" ");
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(prev => prev + words[index] + " ");
      index++;

      if (index >= words.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

    return(
        <>
          <div className="h-full xl:ml-17 min-[1150px]:mr-96  flex px-6 xl:px-10 pt-8">
            {displayed || "Generating..."}
          </div>
          <RightSideBar/>
        </>
 );
}


