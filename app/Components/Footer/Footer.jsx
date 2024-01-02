import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-wrap max-md:flex-col max-sm:flex-col py-8 border-t border-black/40   mx-4 '>
         <div className='flex top-0 w-[25%] max-sm:my-2 max-sm:w-full items-center space-x-2 max-sm:space-x-1'>
           <Image
           src={'/logo.png'}
           width={500}
           height={500}
           className='lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-6 sm:h-6 max-sm:w-6 max-sm:h-6'
           /> 
 <Link href={"/"} className=' md:text-base max-sm:my-2  max-sm:text-sm font-bold'>MediLab Hospital</Link>
        </div>
        <div className='flex w-[25%] max-sm:my-2 max-sm:w-full flex-col text-left'>
            <h2 className='text-xl font-semibold py-2'>Quick Links</h2>
<Link className='rounded-md font-normal' href={"/home"}>Home</Link>
<Link className='rounded-md font-normal' href={"/services"}>Services</Link>
<Link className='rounded-md font-normal' href={"/appointment"}>Appointment</Link>
<Link className='rounded-md font-normal' href={"/aboutUs"}>About Us</Link>
<Link className='rounded-md font-normal' href={"/contactUs"}>Contact Us</Link>
        </div>
        <div className='flex w-[25%] max-sm:my-2 max-sm:w-full flex-col text-left'>
            <h2 className='text-xl font-semibold py-2'>Hours</h2>
<h1 className='rounded-md font-normal flex gap-6 ' >Monday:    <span>9:00 to 8:00</span></h1>
<h1 className='rounded-md font-normal flex gap-6 ' >Tuesday:   <span>9:00 to 8:00</span></h1>
<h1 className='rounded-md font-normal flex gap-6 ' >Wednesday: <span>9:00 to 8:00</span></h1>
<h1 className='rounded-md font-normal flex gap-6 ' >Thursday:  <span>9:00 to 8:00</span></h1>
<h1 className='rounded-md font-normal flex gap-6 ' >Friday:    <span>9:00 to 8:00</span></h1>
        </div>
        <div className='flex w-[25%] max-sm:my-2 max-sm:w-full  flex-col text-left'>
            <h2 className='text-xl font-semibold py-2'>Contact</h2>
<h1 className='rounded-md font-normal flex gap-2 '><FaPhoneAlt size={20}/>Phone</h1>
<h1 className='rounded-md font-normal flex gap-2'><MdEmail size={20}/> info@email.com</h1>
<h1 className='rounded-md font-normal flex gap-2'><FaMapMarkerAlt size={20}/> MilkyWay.Galaxy</h1>

        </div>
    </div>
  )
}

export default Footer