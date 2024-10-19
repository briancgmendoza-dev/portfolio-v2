import React from 'react'

import { languages, frontend, backend, databases, practices, cloud, tools } from "@/app/data"
import { COLORS } from '@/app/constants'

export default function Skills() {
  const combinedData = {
    languages,
    frontend,
    backend,
    databases,
    practices,
    cloud,
    tools
  }

  const colorKeys = Object.keys(COLORS) as Array<keyof typeof COLORS>;

  return (
    <section className='text-white'>
      <ul>
        <h2 className='font-bold capitalize'>Skills</h2>
        {Object.entries(combinedData).map(([category, values], index) => (
          <li key={category} className='mb-2'>
            <h3 className='font-bold capitalize'>{category}</h3>
            {values.map((value) => {
              const colorKey = colorKeys[index % colorKeys.length];
              const isYellow = colorKey === 'yellow';
              const isOrange = colorKey === 'orange';

              return (
                <span
                  key={value}
                  style={{ backgroundColor: COLORS[colorKey] }}
                  className={`inline-block px-3 py-1 rounded-full ${isYellow || isOrange ? 'text-black' : 'text-white'} m-1`}
                >
                  {value}
                </span>
              );
            })}
          </li>
        ))}
      </ul>
    </section>
  )
}
