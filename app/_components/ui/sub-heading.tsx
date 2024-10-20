type TSubHeading = {
  text: string;
  className?: string;
}

export default function SubHeading({ text, className }: TSubHeading) {
  return (
    <h3 className={`font-bold capitalize ${className}`}>{text}</h3>
  )
}
