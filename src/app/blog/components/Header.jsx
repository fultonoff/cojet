import React from 'react'
import bg from '../../../images/route/routeimg2.jpg'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='h-[50vh] w-full relative'>
      <div className=' bg-gradient-to-l from-transparent to-black absolute inset-0 z-10'> </div>
      <Image src={bg} alt='' className='absolute inset-0 h-full w-full object-cover'/>
        <div className='center  relative z-20 h-full'>
      <div className=' font-Playfair text-5xl sm:text-[51px] text-center sm:text-left text-white absolute top-1/2 -translate-y-1/2'>

       <h1>Latest news</h1>
       <p className="font-Lato text-sm text-white mt-5 sm:text-[18px] max-w-3xl">
          Stay informed about the latest private aviation trends, news, and
          insights. Explore new jet models, cutting-edge technologies, and
          industry updates.
        </p>
      </div>

        </div>
    </header>
  )
}

export default Header
