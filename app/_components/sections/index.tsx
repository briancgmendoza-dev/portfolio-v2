type TSection = {
  children: React.ReactNode,
  className?: string;
}

export default function Section({ children, className = '' }: Readonly<TSection>) {
  return (
    <section className={`text-white ${className}`.trim()}>{children}</section>
  )
}
