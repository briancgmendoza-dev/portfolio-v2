export default function Aside({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <aside className='w-[90%] sm:w-[375px] mx-5'>
      {children}
    </aside>
  )
}
