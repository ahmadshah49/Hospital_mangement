import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonDark from '../ButtonDark/ButtonDark'
import ButtonLight from '../ButtonLight/ButtonLight'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className='flex justify-between items-center px-4 py-6'>
        <div className='flex items-center space-x-2'>
           <Image
           src={'/logo.png'}
           width={500}
           height={500}
           className='lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-6 sm:h-6'/> 
           <h1 className='lg:text-lg md:text-base font-bold'>MediLab Hospital</h1>
        </div>
        <ul className='flex items-center space-x-2 '>
<li><Link className='active:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold' href={"/"}>Home</Link></li>
<li><Link className='focus:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold' href={"/appointment"}>Appointment</Link></li>
<li><Link className='active:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold' href={"/services"}>Services</Link></li>
<li><Link className='active:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold' href={"/aboutUs"}>About Us</Link></li>
<li><Link className='active:bg-[#3f6db1] active:text-whiteduration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold' href={"/contactUs"}>Contact Us</Link></li>
        </ul> 
        <div className='flex space-x-2'>
<ButtonLight btnText={"Sign in"} hrefProp={"/signIn"}/>
<ButtonDark btnText={"Register"} hrefProp={"/register"}/>
        </div>
    </div>
  )
}

export default Navbar