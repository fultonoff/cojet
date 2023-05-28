'use client'
import { routes } from "@/app/hoc/data";
import Image from "next/image";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
   
  export default function RouteCard() {
    return (

        <div className="center grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-[60px]">
        {routes.map((route)=>{
            return (
      <Card className="mt-6 w-full bg-darkbg" key={route.id}>
        <CardHeader  className="relative h-56 shadow-none">
          <Image src={route.image} alt="image jet" className="object-cover h-full w-full" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5"  className="mb-2 font-Playfair text-white text-[24px]">
            {route.title}
          </Typography>
          <Typography className='text-white'>
            From: {route.time}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="rounded5 bg-gold hover:shadow-0 shadow-none font-Mulish hover:bg-white hover:text-gold transtion-all ease-in-out duration-200">Book now</Button>
        </CardFooter>
      </Card>

            )
        })}
        </div>
    );
  }