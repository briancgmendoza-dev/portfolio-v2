type TSubHeading = {
  text: string;
}

export default function SubHeading({ text }: TSubHeading) {
  return (
    <h3 className='font-bold capitalize'>{text}</h3>
  )
}
