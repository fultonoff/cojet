
'use client'
import React from 'react'
import Image from 'next/image'
import bg from '../images/histotybg.jpg'
import Reveal from "../app/Hook/useReveal";


const History = () => {
  return (
    <section className='min-h-[80vh] relative flex justify-center items-center' id='about'>
      <div className='absolute top-0 bottom-0 right-0 left-0  z-10 bg-gradient-to-t from-black to-transparent'></div>

      <div className='absolute top-0 left-0 bottom-0 right-0 z-1'>

      <Image src={bg} alt='history bg' className='w-full h-full object-cover'/>
      </div>
    <Reveal>
      <div className='z-20 w-full relative text-center sm:max-w-4xl mx-auto px-4'>
        <h1 className='font-Playfair text-xl ss:text-4xl sm:text-[51px] text-white mt-[40px] '>‘As a self-made entrepreneur, COJET gives me back control’</h1>

        <p className='font-Lato text-sm xs:text-[17px] mt-[50px] text-center text-white'>Time is finite, we could all do with more of it. For George, a busy self-made entrepreneur, he has his days mapped out with military precision. If he needs to be somewhere at 9AM, he must be there by 9AM. After being let down by the airlines with their poor reliability, it was time to find an alternative.</p>

        <div className='text-center mt-[60px] mb-[20px]'>
        <button className='rounded5 bg-white hover:shadow-0 text-gold hover:text-white shadow-none font-Mulish hover:border border border-transparent hover:border-white hover:bg-gold px-8 py-4 transtion-all ease-in-out duration-200'>Read more</button>
      </div>
      </div>

    </Reveal>
    </section>
  )
}

export default History
