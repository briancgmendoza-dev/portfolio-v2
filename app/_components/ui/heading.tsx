type THeading = {
  text: string
}

export default function Heading({ text }: THeading) {
  return (
    <h2 className='text-[50px] md:text-[70px] font-bold capitalize underline'>{text}</h2>
  )
}
