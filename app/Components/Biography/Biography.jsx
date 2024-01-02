import Image from 'next/image'
import React from 'react'
import ButtonDark from '../ButtonDark/ButtonDark'

const Biography = () => {
  return (
    <div className='relative w-full mt-8 flex items-center justify-center  px-4 max-w-screen-2xl mx-auto  max-sm:mt-[20rem] max-md:flex-col-reverse'>
      <div className='w-[50%] max-md:w-full '>
        <Image
        src={'/bioGraphyLeft.png'}
      width={700}
      height={700}
      className=''
        />
      </div>
      <div className='w-[50%] max-md:w-full'>
        <h2 className='text-lg font-medium'>Biography</h2>
        <h1 className='text-3xl font-semibold py-4'>Who We Are</h1>
        <p className='font-medium'>
        Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience in real time.




        </p>
        <p className='py-4 font-medium'>It's 2019: time to sink or swim.</p>
        <p className='py-4 pb-8 font-medium'>We are your Social Media Marketing Agency.</p>
        <ButtonDark btnText={"See More"}/>
      </div>
    </div>
  )
}

export default Biography