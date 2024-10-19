import React from 'react'

type TPill = {
  style?: object;
  className?: string;
  text: string;
}

export default function Pill({ style, className, text }: TPill) {
  const combinedStyle: string = `inline-block px-3 py-1 rounded-full m-1 ${className}`
  return (
    <span style={style} className={combinedStyle}>{text}</span>
  )
}
