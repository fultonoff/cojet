import React from 'react'
import { Input, Textarea, Button  } from '@material-tailwind/react'

import Maps from './Maps'

const Contact = () => {
  return (
    <section className='bg-darkbg py-[70px]'>
      <div className='center text-white'>
        <h2 className='text-[30px] font-Playfair text-center'>Contact Us</h2>
        <p className='text-center max-w-2xl mx-auto'>Connect with us today! Our contact section is your gateway to reaching our team. Whether you have questions, inquiries, or seek collaborations, we are here to assist you.</p>

            <div className='flex flex-col sm:flex-row mt-[60px] w-full gap-2'>
                <form className='sm:w-1/2'>

                    <div className='w-full flex flex-col gap-4'>
                    <Input color='amber' variant='standard' label='Full name' required type="text" className='w-full'/>
                    <Input color='amber' variant='standard' label='Email' required type="text" className='text-white'/>
                    <Input color='amber' variant='standard' label='Full name' required type="text" className='text-white'/>
                    <Textarea color='amber' variant="standard" label="Standard" required/>

                    </div>

                    <Button type="submit" className='mt-[20px] rounded5 bg-gold hover:shadow-0 shadow-none font-Mulish hover:bg-white hover:text-gold transtion-all ease-in-out duration-200'>Submit</Button>
                </form>



                <div className='sm:w-1/2 rounded5 overflow-hidden'>
                  <Maps className=''/>
                </div>
            </div>
            
      </div>
    </section>
  )
}

export default Contact
