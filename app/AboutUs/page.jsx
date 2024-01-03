import React from 'react'
import Hero from '../Components/Hero/Hero'
import Biography from '../Components/Biography/Biography'

const page = () => {
  return (
    <>
<Hero src={'/services.png'}/>
<div className='max-sm:mt-96 pb-16'>
<Biography src={"/grp.jpg"} text={"About"}/>
</div>
    </>
  )
}

export default page