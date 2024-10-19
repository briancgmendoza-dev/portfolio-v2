export default function Article({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <article className='w-[100] md:w-[375px] mx-2'>
      {children}
    </article>
  )
}
