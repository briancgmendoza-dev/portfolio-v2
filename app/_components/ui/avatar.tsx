import React from 'react'
import Image from 'next/image'

export default function Avatar() {
  return (
    <Image
      src='/assets/me_professional.jpg'
      alt="Profile Picture"
      width={500}
      height={500}
      className='mx-auto object-cover'
      priority={true}
    />
  )
}
