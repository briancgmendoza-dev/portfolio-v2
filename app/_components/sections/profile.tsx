import React from 'react'

import Avatar from '@/app/_components/ui/avatar'
import { profile, links } from '@/app/data'

export default function Profile() {
  return (
    <section className='text-white'>
      <Avatar />
      <ul>
        {Object.entries(profile).map(([key, value]) => (
          <li key={key}>
            {value ? value : 'N/A'}
          </li>
        ))}
      </ul>
      <ul className='flex items-center justify-center'>
        {links.map((link, index) => (
          <li
            key={index}
          >
            {link.name}
            {link.icon ? (
              <img src={link.icon} alt={link.name} />
            ) : (
              <p>No Icon</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
