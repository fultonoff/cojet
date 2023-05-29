'use client'
import RouteCard from './RouteCard'
import Link from 'next/link'

const Route = () => {
  return (
    <section className='bg-gold py-[90px] min-h-[50vh]' id='service'>
        <div className='center text-center'>
            <h1 className='font-Playfair text-4xl sm:text-[48px] text-white mt-[40px]'>Popular Routes</h1>
        </div>
      <RouteCard/>

      <div className='text-center mt-[60px]'>
        <Link href='#book' className='rounded5 whitespace-nowrap bg-white hover:shadow-0 text-gold hover:text-white shadow-none font-Mulish hover:border border border-transparent hover:border-white hover:bg-gold sm:px-8 sm:py-4 p-2 transtion-all ease-in-out duration-200' >Book a private jet</Link>
      </div>
    </section>
  )
}

export default Route
