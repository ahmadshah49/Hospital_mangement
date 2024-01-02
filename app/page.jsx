"use client"


import Biography from './Components/Biography/Biography'
import Hero from './Components/Hero/Hero'
import Slider from './Components/Slider/Slider'
import Card from './Components/Card/Card'


export default function Home() {
  const onSubmitHandler=()=>{
console.log("kfk");
  }
  return (
   <>
   <Hero src={"/Vector.png"}/>
   <Biography text={'Biography'} src={'/bioGraphyLeft.png'}/>
   <Slider/>
   <div className=' my-36  lg:mx-16 md:mx-10 sm:mx-10 '>  
<h1 className=' text-3xl text-center font-bold'>Our Doctors</h1>
<div className='grid mt-16 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 lg:grid-cols-4'>

<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>
   </div>
 <div className='mx-4'>
 <h1 className=' text-3xl text-center  font-bold'>Send us a message</h1>
<form onSubmit={onSubmitHandler} className='my-8 flex flex-col items-center'>
<div className='grid grid-cols-2 items-center mx-auto w-[70%] max-sm:w-full  my-4 gap-6'>
<input type="text" name='firstName' id='firstName' placeholder='First Name' className='border-2 outline-none border-black/40 max-sm:py-2 py-4 px-2 rounded-md' />
<input type="text" name='lastName' id='lastName' placeholder='Last Name' className='border-2 outline-none border-black/40 max-sm:py-2 py-4 px-2 rounded-md' />
<input type="number" name='mobileNumber' id='mobileNumber' placeholder='Mobile Number' className='border-2 outline-none border-black/40 max-sm:py-2 py-4 px-2 rounded-md' />
<input type="email" name='email' id='email' placeholder='Email'className='border-2 outline-none border-black/40 max-sm:py-2 py-4 px-2 rounded-md' />
</div>
<textarea name="message" id="message" cols="30" rows="5" placeholder='Message' className='border-2 mb-8 outline-none border-black/40 py-4 px-2 rounded-md w-[70%] max-sm:w-full  '></textarea>
<button className='bg-[#9083D5] sm:py-4 w-fit sm:px-6 max-sm:py-3 max-sm:px-4 md:py-2 md:px-2 md:text-center lg:py-3 lg:px-6  rounded-xl text-white font-semibold shadow-black/30 shadow-inner '>
  Send us
</button>
</form>
 </div>

  
   </>
  )
}
