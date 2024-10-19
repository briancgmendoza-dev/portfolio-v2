import React from 'react'

type THeading = {
  text: string
}

export default function Heading({ text }: THeading) {
  return (
    <h2 className='text-[30px] md:text-[40px] font-bold capitalize underline'>{text}</h2>
  )
}
