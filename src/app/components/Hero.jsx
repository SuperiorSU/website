"use client";
import React from "react";
import Image from "next/image";
import Motionframe from "./Motionframe";
import "@/app/Style/hero.css";


const Hero = () => {
  return (
    <div className="bg-home-page-back bg-cover bg-no-repeat">
      <div className="bg-radial-gradient flex justify-center overflow-hidden lg:h-[70vh] md:h-[80vh] ">
        <Motionframe/>
      </div>
      <div className="h-[750px] bg-white-gradient">
        <header className="font-Pattaya flex items-center justify-center text-[#0C6242] text-[52px] pt-20">
          Why Anahata Connections?
        </header>
        <header className="font-Satisfy flex items-center justify-center text-4xl pt-10 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-center mx-auto">
          Welcome to Anahata Connections, where love intertwines with
          spirituality. Explore meaningful connections grounded in yogic science
          and the wisdom of the heart chakra. Our platform unites kindred spirits
          aligned with mindfulness and compassion. Join us on the journey to
          deeper connections and conscious relationships
        </header>
        <div className="flex justify-center mt-20">
          <div className="mt-2 bg-[#094C3B] text-white rounded-[32px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold">
            KNOW MORE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;