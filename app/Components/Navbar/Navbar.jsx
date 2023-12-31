"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ButtonDark from '../ButtonDark/ButtonDark'
import ButtonLight from '../ButtonLight/ButtonLight'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [nav, setNav] = useState(true)
  return (
    <>
    <div className='flex fixed  w-full justify-between items-center max-sm:px-2 max-sm:py-3 sm:px-3 sm:py-4  md:px-4 md:py-5 max-w-screen-2xl mx-auto z-50'>
        <div className='flex items-center space-x-2 max-sm:space-x-1'>
           <Image
           src={'/logo.png'}
           width={500}
           height={500}
           className='lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-6 sm:h-6 max-sm:w-6 max-sm:h-6'/> 
           <h1 className='lg:text-lg md:text-base  max-sm:text-sm font-bold'>MediLab Hospital</h1>
        </div>
        <ul className=' items-center space-x-2 sm:hidden max-sm:hidden md:flex'>
<li><Link className='active:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold' href={"/"}>Home</Link></li>
<li><Link className='focus:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold' href={"/appointment"}>Appointment</Link></li>
<li><Link className='active:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold' href={"/services"}>Services</Link></li>
<li><Link className='active:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold' href={"/aboutUs"}>About Us</Link></li>
<li><Link className='active:bg-[#3f6db1] active:text-whiteduration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold' href={"/contactUs"}>Contact Us</Link></li>
        </ul> 
        <div className='md:flex sm:hidden max-sm:hidden space-x-2'>
<ButtonLight btnText={"Sign in"} hrefProp={"/signIn"}/>
<ButtonDark btnText={"Register"} hrefProp={"/register"}/>
        </div>
        <div onClick={() => setNav((prev) => (!prev))}
         className='max-sm:block hidden'>
          {
            nav ? 
            <IoClose size={20} /> :
            <FaBars size={20}/>
          }
        </div>
    </div>
    <div className={nav ? ' bg-[#C5DCFF] w-[60%] h-screen fixed top-0 right-0 left-0 bottom-0  duration-1000 md:hidden'  : 'bg-[#C5DCFF] w-[60%] h-screen fixed top-0 right-0 left-[-100%] bottom-0  duration-1000'}>
      <div className='px-2 py-4'>
      <div className='flex items-center space-x-2 max-sm:space-x-1'>
           <Image
           src={'/logo.png'}
           width={500}
           height={500}
           className='md:hidden sm:w-10 sm:h-10 max-sm:w-10 max-sm:h-10'/> 
           <h1 className='lg:hidden md:text-base  max-sm:text-sm font-bold'>MediLab Hospital</h1>
        </div>
        <ul className='  space-y-10 md:hidden max-sm:flex flex-col py-10 justify-between w-full '>
<li className='active:bg-[#9083D5] border-b border-[#9083D5] hover:text-white active:text-white duration-300 py-2 px-4 w-11/12   font-semibold'><Link  href={"/"}>Home</Link></li>
<li className='active:bg-[#9083D5] border-b border-[#9083D5] hover:text-white active:text-white duration-300 py-2 px-4 w-11/12   font-semibold'><Link href={"/appointment"}>Appointment</Link></li>
<li className='active:bg-[#9083D5] border-b border-[#9083D5] hover:text-white active:text-white duration-300 py-2 px-4 w-11/12   font-semibold'><Link  href={"/services"}>Services</Link></li>
<li className='active:bg-[#9083D5] border-b border-[#9083D5] hover:text-white active:text-white duration-300 py-2 px-4 w-11/12   font-semibold'><Link  href={"/aboutUs"}>About Us</Link></li>
<li className='active:bg-[#9083D5] border-b border-[#9083D5] hover:text-white active:text-white duration-300 py-2 px-4 w-11/12   font-semibold'><Link  href={"/contactUs"}>Contact Us</Link></li>
        </ul> 
<div className='flex items-center space-x-2  bottom-5'>
<ButtonLight btnText={"Sign in"} hrefProp={"/signIn"}/>
<ButtonDark btnText={"Register"} hrefProp={"/register"}/>
</div>
      </div>
    </div>
    </>
  )
}

export default Navbar