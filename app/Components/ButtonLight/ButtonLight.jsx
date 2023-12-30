import Link from 'next/link'
import React from 'react'

const ButtonLight = ({btnText,hrefProp}) => {
  return (
    <Link href={hrefProp}
    className='bg-white md:py-2 md:px-2 md:text-center lg:py-3 lg:px-3 rounded-xl text-black font-semibold shadow-black/30 shadow-inner '
    >{btnText}</Link>
  )
}

export default ButtonLight