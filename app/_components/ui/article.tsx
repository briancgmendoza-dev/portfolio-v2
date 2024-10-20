export default function Article({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <article className='w-[90%] sm:w-[375px] mx-5'>
      {children}
    </article>
  )
}
