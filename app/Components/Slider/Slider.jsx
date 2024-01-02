import Image from 'next/image'
import React from 'react'

const Slider = () => {
  return (
    <div className='flex  md:pt-32  max-md:mx-6 my-10 items-center justify-center gap-6 max-sm:flex-col'
   >
        <div className='w-[250px] h-[250px]  rounded-lg shadow-2xl shadow-black/70'>
         <Image src={'https://images.pexels.com/photos/8460123/pexels-photo-8460123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
         width={500}
         height={500}
         className='w-full h-[80%] object-cover rounded-lg'/>
         <h1 className='text-2xl font-semibold text-center py-2'>Heart specialist</h1>
        </div>
        <div className='w-[250px] h-[250px]  rounded-lg shadow-2xl shadow-black/70'>
         <Image src={'https://images.pexels.com/photos/8460123/pexels-photo-8460123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
         width={500}
         height={500}
         className='w-full h-[80%] object-cover rounded-lg'/>
         <h1 className='text-2xl font-semibold text-center py-2'>Heart specialist</h1>
        </div>
        <div className='w-[250px] h-[250px]  rounded-lg shadow-2xl shadow-black/70'>
         <Image src={'https://images.pexels.com/photos/8460123/pexels-photo-8460123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
         width={500}
         height={500}
         className='w-full h-[80%] object-cover rounded-lg'/>
         <h1 className='text-2xl font-semibold text-center py-2'>Heart specialist</h1>
        </div>
    </div>
  )
}

export default Slider