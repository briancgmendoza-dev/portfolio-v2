type TSection = {
  children: React.ReactNode,
  className?: string;
}

export default function Section({ children, className }: TSection) {
  return (
    <section className={`text-white ${className}`}>{children}</section>
  )
}
