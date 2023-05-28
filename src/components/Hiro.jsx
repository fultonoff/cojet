"use client";

import React from "react";
import Image from "next/image";
import routeimg from '../images/route/routeimg5.jpg'
import Link from "next/link";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

const Hiro = () => {
  return (
    <header className="h-screen relative ">
      <div className="absolute top-0 bottom-0 right-0 left-0  z-10 bg-gradient-to-t from-darkbg to-transparent"></div>
      <div className="absolute top-0 left-0 bottom-0 right-0">

        <Image src={routeimg} alt="bg" className="w-full h-full object-cover" loading='lazy'/>
      </div>

      <div className="center z-10 relative flex items-center justify-center h-full">
      

        <div className="text-center text-white absolute bottom-48">

          <ParallaxProvider>
            <Parallax translateY={[50, -300]} speed={50}>

          <h1 className="font-Playfair text-5xl sm:text-[51px] text-center">
          Private aviation made simple
          </h1>
            </Parallax>
          </ParallaxProvider>
          <p className="font-Lato text-[17px] mt-[20px]">
            Welcome to one of Africa’s most trusted private aviation
            companies.
          </p>

          <div className="mt-[50px]">
            <Link
              href="/"
              className="text-[14px] rounded5 bg-gold hover:shadow-0 shadow-none font-Mulish hover:bg-white hover:text-gold transtion-all ease-in-out duration-200 px-8 py-4"
            >
              Book now
            </Link>
          </div>
        </div>
       

      </div>
    </header>
  );
};

export default Hiro;
