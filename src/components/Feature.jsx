'use client'
import React from 'react'
import Image from 'next/image'
import bg from '../images/travelwith.jpg'

const Feature = () => {
  return (
    <section className='min-h-[100vh] relative flex justify-center items-center'>
      <div className='absolute top-0 bottom-0 right-0 left-0  z-10 bg-gradient-to-t from-black to-transparent'></div>

      <div className='absolute top-0 left-0 bottom-0 right-0 z-1'>

      <Image src={bg} alt='history bg' className='w-full h-full object-cover'/>
      </div>

      <div className='z-20 relative text-center max-w-4xl mx-auto px-4'>
        <h1 className='font-Playfair text-4xl sm:text-[51px] text-white mt-[40px] '>Never leave your loved ones in the cargo hold</h1>

        <p className='font-Lato text-[17px] mt-[50px] text-center text-white'>Ally and Jason are successful business owners, but traveling with their beloved Ollie the labradoodle wasn’t easy. They either had to organise sitters, boarding kennels, or throw Ollie into the cargo hold with their bags. Thanks to our program and Pets on Jets policy, Ollie can join Ally and Jason in the cabin at no extra cost.</p>

        <div className='text-center mt-[60px]'>
        <button className='rounded5 bg-white hover:shadow-0 text-gold hover:text-white shadow-none font-Mulish hover:border border border-transparent hover:border-white hover:bg-gold px-8 py-4 transtion-all ease-in-out duration-200'>Read more</button>
      </div>
      </div>
    </section>
  )
}

export default Feature
