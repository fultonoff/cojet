import React from 'react'
import { BiLoader } from 'react-icons/bi';


const Loading = () => {
  return (
    <div className='h-screen fixed bg-white top-0 bottom-0 left-0 right-0 z-[99999] flex items-center justify-center'>
     <div className='flex items-center space-x-4'>
        <BiLoader className='text-4xl animation animate-spin transition-all ease-linear text-gold'/>
       <div className='text-gold text-xl'>Loading Content...</div> 
     </div>
    </div>
  )
}

export default Loading
