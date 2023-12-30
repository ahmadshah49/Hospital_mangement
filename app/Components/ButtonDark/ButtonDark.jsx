import Link from 'next/link'
import React from 'react'

const ButtonDark = ({btnText,hrefProp}) => {
  return (
    <Link href={hrefProp}
    className='bg-[#9083D5] md:py-2 md:px-2 md:text-center lg:py-3 lg:px-3  rounded-xl text-white font-semibold shadow-black/30 shadow-inner '
    >{btnText}</Link>
  )
}

export default ButtonDark