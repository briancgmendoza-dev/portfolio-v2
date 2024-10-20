export default function Section({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="text-white">{children}</section>
  )
}
