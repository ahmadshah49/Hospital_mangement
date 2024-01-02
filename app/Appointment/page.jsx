"use client"
import Hero from '../Components/Hero/Hero'



const page = () => {
  const onSubmitHandler=(e)=>{
    e.preventDefault()
      }
  return (
    <>
<Hero src={"/Vector1.png"}/>

<div className='mx-4 max-sm:mt-96 mt-20'>

<form onSubmit={onSubmitHandler} className='my-8 flex flex-col items-center'>
<h1 className='text-7xl max-md:text-5xl max-sm:3xl max-sm:text-center max-sm:mx-0 text-[#5f5f5f]  font-extrabold py-4'>Appointment</h1>
<div className='grid grid-cols-2 items-center mx-auto w-[95%] max-sm:w-full  my-4 gap-6'>
<input type="text" name='firstName' id='firstName' placeholder='First Name' className='border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md' />
<input type="text" name='lastName' id='lastName' placeholder='Last Name' className='border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md' />
<input type="number" name='mobileNumber' id='mobileNumber' placeholder='Mobile Number' className='border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md' />
<input type="email" name='email' id='email' placeholder='Email'className='border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md' />
<input type="date" name='email' id='email' placeholder='Appointment Date'className='border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md' />
<input type="time" name='email' id='email' placeholder='Appointment Time'className='border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md' />
<input type="text" name='email' id='email' placeholder='Department Name'className='border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md' />
<input type="text" name='email' id='email' placeholder='Doctor Name'className='border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md' />
</div>
<textarea name="message" id="message" cols="30" rows="5" placeholder='Address' className='border mb-8 outline-none border-black/40 py-2 px-2 rounded-md w-[95%] max-sm:w-full  '></textarea>
<button className='bg-[#9083D5] sm:py-4 w-fit sm:px-6 max-sm:py-3 max-sm:px-4 md:py-2 md:px-2 md:text-center lg:py-3 lg:px-6  rounded-xl text-white font-semibold shadow-black/30 shadow-inner '>
 Register
</button>
</form>
 </div>

    </>
  )
}

export default page