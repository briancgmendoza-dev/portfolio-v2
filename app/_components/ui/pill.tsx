type TPill = {
  style?: object;
  className?: string;
  text: string;
}

export default function Pill({ style, className, text }: Readonly<TPill>) {
  const combinedStyle: string = `inline-block px-3 py-1 rounded-full m-1 transition-opacity duration-300 hover:opacity-75 ${className}`.trim()
  return (
    <span style={style} className={combinedStyle}>{text}</span>
  )
}
