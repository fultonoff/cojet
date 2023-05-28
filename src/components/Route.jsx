'use client'
import RouteCard from './RouteCard'

const Route = () => {
  return (
    <section className='bg-gold py-[90px] min-h-[50vh]'>
        <div className='center text-center'>
            <h1 className='font-Playfair text-4xl sm:text-[48px] text-white mt-[40px]'>Popular Routes</h1>
        </div>
      <RouteCard/>

      <div className='text-center mt-[60px]'>
        <button className='rounded5 bg-white hover:shadow-0 text-gold hover:text-white shadow-none font-Mulish hover:border border border-transparent hover:border-white hover:bg-gold px-8 py-4 transtion-all ease-in-out duration-200'>Book a private jet</button>
      </div>
    </section>
  )
}

export default Route
