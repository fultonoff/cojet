'use client'
import Image from "next/image";
import imagebg from '../images/histotybg.jpg'
import { BsArrowRightShort } from 'react-icons/bs';
import Link from 'next/link'

   
  export default function NewsCard({data, image}) {
   console.log(image);
    const blog = data
    console.log(blog);
    return (
<div className=" bg-white  rounded5 ">
    <div >
        <img className="rounded-t-lg" src={data.image.fields.file.url} alt="" />
    </div>
    <div className="p-5">
        <h1>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
        </h1>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{data.shortDescription}</p>
        <Link href="/blog/slug"  className="py-2 text-sm font-medium  text-gold hover:brightness-110 focus:underline focus:outline-none ">
            
            <span className="whitespace-nowrap underline">Read more</span>
            
        </Link>
    </div>
</div>

    );
  }