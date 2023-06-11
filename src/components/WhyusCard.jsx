'use client'

import Image from "next/image";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    
  } from "@material-tailwind/react";
   
  export default function WhyusCard({data}) {
    return (
      <Card className="w-full overflow-hidden shadow-none rounded-none px-0">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >

          <div className=" h-[300px]">

          <Image
            src={data.image}
            alt="image"
            className="h-full object-cover"
          />
          </div>
        </CardHeader>
        <CardBody className="px-0">
          <Typography className='text-darkbg text-[30px] font-Playfair' >
            {data.title}
          </Typography>
          <Typography variant="lead"  className="mt-3 font-normal text-[17px] font-Lato">
            {data.description}
          </Typography>
        </CardBody>
      
      </Card>
    );
  }