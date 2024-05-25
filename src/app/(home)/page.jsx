"use client"
import { Hero } from "@/components/hero";
import ServiceSection from "@/components/service-section";
import InfoSection from "@/components/yatchInfo/info-section";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    console.log(document.cookie,'cookies client')
  },[])
  return (
    <div className="w-full">
     <Hero/>
     <InfoSection/>

     <ServiceSection/>
    </div>
  );
}
