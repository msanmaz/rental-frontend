"use client"
import { Hero } from "@/components/hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    console.log(document.cookie)
  },[])
  return (
    <div className="w-full">
     <Hero/>
    </div>
  );
}
