import React from "react";
import imgApp from "../images/appimg.png";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const AppComponent = () => {
  return (
    <div className="bg-gold">
      <section className="py-[70px] bg-gold relative center">
        <div className="center absolute -top-20 right-0">
          <div className=" w-80 hidden sm:inline-flex">
            <Image
              src={imgApp}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="center absolute w-full left-1/2 -translate-x-1/2 sm:left-0 sm:-translate-x-0">
          <h1 className="text-white font-Playfair text-md sm:text-[29px] w-full sm:max-w-xl text-center sm:text-left">
            Download the COJET app today and transform your A to B.
          </h1>
          <div className="mx-auto text-center w-full sm:text-left mt-10">
        <button  disabled className='rounded5 whitespace-nowrap mt-5 cursor-not-allowed bg-white hover:shadow-0 text-gold hover:text-white shadow-none font-Mulish hover:border border border-transparent hover:border-white hover:bg-gold sm:px-8 sm:py-4 p-2 transtion-all ease-in-out duration-200'>Coming soon...</button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AppComponent;
