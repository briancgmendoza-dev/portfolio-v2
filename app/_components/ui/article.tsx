export default function Article({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <article className='w-[90%] sm:w-[375px] md:w-[80%] lg:w-[48%] mx-5 lg:h-screen lg:overflow-y-auto'>
      {children}
    </article>
  )
}
