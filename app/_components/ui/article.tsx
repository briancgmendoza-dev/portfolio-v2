export default function Article({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <article className='w-[90%] sm:w-[375px] md:w-[80%] lg:w-[50%] mx-5 lg:h-screen lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-thumb-rounded-lg'>
      {children}
    </article>
  )
}
