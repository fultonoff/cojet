'use client'

import React from 'react'
import { why } from '@/app/hoc/data'
import WhyusCard from './WhyusCard'

const Whyus = () => {
  return (
    <section className=' py-[80px]'>
      
      <div className='center'>
            <h1 className='font-Playfair text-4xl sm:text-[48px] text-darkbg mt-[40px] text-center'>Why Us?</h1>
      </div>

      <div className='center grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-[60px]'>
        {why.map((why)=>{
            return (
                <WhyusCard key={why.id} data={why}/>
            )
        })}
      </div>
    </section>
  )
}

export default Whyus
