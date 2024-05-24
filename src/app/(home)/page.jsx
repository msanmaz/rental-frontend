"use client"
import { Hero } from "@/components/hero";
import InfoSection from "@/components/yatchInfo/info-section";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    console.log(document.cookie,'cookies client')
  },[])
  return (
    <div className="w-full">
     <Hero/>
     <InfoSection/>
    </div>
  );
}
