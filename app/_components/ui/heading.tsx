type THeading = {
  text: string;
  underline?: boolean;
}

export default function Heading({ text, underline = true }: Readonly<THeading>) {
  return (
    <h2 className={`text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px] font-bold capitalize ${underline ? 'underline' : ''}`.trim()}>{text}</h2>
  )
}
