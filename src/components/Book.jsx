'use client'

import React from 'react'
import BookForm from './BookForm'


const Book = () => {
  return (
    <section className='bg-darkbg w-full py-[70px] '>
        <div className='flex justify-center items-center'>

      <div className='center text-center text-white'>
        <h1 className='font-Playfair text-4xl sm:text-[48px] '>Book a private jet</h1>
        <p className='font-Lato text-[17px] mt-[50px]'>For the best rates please download the Airly App, otherwise provide your itinerary below.</p>
      </div>
        </div>

      {/* Form */}
      <BookForm  />
    </section>
  )
}

export default Book
