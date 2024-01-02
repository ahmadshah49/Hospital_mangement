import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='flex m-2 py-4 bg-blue-200 hover:bg-blue-300 hover:scale-105 transition ease-in-out delay-75 cursor-pointer rounded-2xl flex-wrap justify-center max-sm:flex-col max-sm:my-4 gap-2 items-center'>
  <Image src={'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
  width={500}
  height={500}
  alt='Doctor Image'
  className='w-24 h-24 object-cover rounded-full'/>
<div>
<h1 className='text-xl font-semibold'>Silva A.D.M.P</h1>
  <p className='text-sm font-normal'>MBBS,MD,IDCCM</p>
</div>

</div>
  )
}

export default Card