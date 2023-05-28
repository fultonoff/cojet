'use client'

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import logo from '../images/logoFly1.png'
 
export default function Footer() {
  return (
    <footer className="w-full bg-darkbg p-8 ">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-darkbg text-center md:justify-between center">
        <Image src={logo} alt="logo" className="w-20" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 text-white font-Mulish">
          <li>
            <Typography
              as="a"
              href="#"
              
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-gold center" />
      <Typography  className="text-center font-normal text-white">
        &copy; {new Date().getFullYear()} COJET
      </Typography>
    </footer>
  );
}