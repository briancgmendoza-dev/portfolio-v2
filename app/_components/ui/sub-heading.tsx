type TSubHeading = {
  text: string;
  className?: string;
}

export default function SubHeading({ text, className = '' }: Readonly<TSubHeading>) {
  return (
    <h3 className={`font-bold capitalize ${className}`.trim()}>{text}</h3>
  )
}
