import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineInstagram } from 'react-icons/ai';

const TeamCard = ({data, images}) => {
    console.log(data);
    console.log(data.image.fields.file.url);
  return (
    
    <div className="items-center w-full rounded5 flex flex-col overflow-hidden rounded5 transition-all duration-200 hover:translate-y-2">
        <div className='w-full h-[500px]'>

            <img className="w-full h-full object-cover" src={data.image.fields.file.url} alt="team member"/>
        </div>
        
        <div className="w-full">
            <h3 className="text-xl font-Playfair">
                {data.name}
            </h3>
            <span className="text-gray-500 dark:text-gray-400">{data.role}</span>
            {/* <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{data.role}.</p> */}
            <ul className="flex space-x-4 sm:mt-0">
                <li>
                    <Link href={'https://www.instagram.com/flycojet/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'} target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <AiOutlineInstagram />
                    </Link>
                </li>
               
               
               
            </ul>
        </div>
    </div> 
  )
}

export default TeamCard
