type THeading = {
  text: string;
  underline?: boolean;
}

export default function Heading({ text, underline = true }: THeading) {
  return (
    <h2 className={`text-[50px] lg:text-[70px] font-bold capitalize ${underline && 'underline'}`}>{text}</h2>
  )
}
