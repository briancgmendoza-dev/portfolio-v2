import React from 'react'

export default function Aside({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <aside className='w-[100] md:w-[375px] mx-2'>
      {children}
    </aside>
  )
}
