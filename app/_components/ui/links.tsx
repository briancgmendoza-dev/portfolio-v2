'use client'

import Image from "next/image"

export type TLinks = {
  links: Link<'Resume' | 'Github' | 'LinkedIn' | 'Facebook'>[];
}

type Link<T extends string> = {
  name: T;
  icon: string;
  url?: string;
}

export default function Links({ links }: Readonly<TLinks>) {
  return (
    <ul className='w-[100%] md:w-[50%] flex items-center justify-center mt-5'>
    {links.map((link, index) => (
      <li
        key={index}
        className='mr-5 cursor-pointer'
      >
        {link.name !== 'Resume' ? (
          <button type='button' onClick={() => window.open(link.url, '_blank')}>
            <Image src={link.icon} alt={link.name} width={25} height={25} />
          </button>
        ) : (
          <a href={link.url} download="briancgmendoza.pdf" className='flex items-center border px-2 py-1'>
            <Image src={link.icon} alt={link.name} width={25} height={25} className='mr-2' />
            {link.name}
          </a>
        )}
      </li>
    ))}
  </ul>
  )
}
