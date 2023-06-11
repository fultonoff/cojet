
'use client'

import React, {useState, useEffect} from "react";
import Link from "next/link";
import {
  Navbar,
  MobileNav,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from '../images/logoFly1.png'
import Image from "next/image";
 
export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex  text-[12px] flex-col gap-2 sm:mb-0 sm:mt-0 sm:flex-row sm:items-center sm:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="#service" className="flex items-center font-Mulish text12 ">
          Service
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="#about" className="flex items-center font-Mulish text12 " scroll={false}>
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="#team" className="flex items-center font-Mulish text12">
          Team
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="#contact" className="flex items-center font-Mulish text12">
          Contact
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <>
      <Navbar className="sticky border-0 inset-0 h-max max-w-full rounded-none py-2 px-4 sm:px-8 sm:py-4 bg-dark text-white z-50">
        <div className="flex items-center justify-between  center">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <Image src={logo} alt="logo" className=" w-20"/>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden sm:block">{navList}</div>
            <Link
              href='#book'
              
              className="hidden rounded5 sm:inline-block rouned5 bg-gold hover:shadow-0 shadow-none font-Mulish hover:bg-white hover:text-gold transtion-all ease-in-out duration-200 px-4 py-2"
            >
              <span>Book Now</span>
            </Link>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button   fullWidth className="bg-gold hover:shadow-0 hover:shadow-gold shadow-none font-Mulish hover:bg-white hover:text-gold transtion-all ease-in-out duration-200 ">
            <span>Book now</span>
          </Button>
        </Collapse>
      </Navbar>
      
    </>
  );
}