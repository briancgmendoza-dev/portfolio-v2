import Section from "@/app/_components/sections"
import Heading from '@/app/_components/ui/heading'

import { projects } from "@/app/data"
import Image from "next/image"

export default function Projects() {
  return (
    <Section>
      <Heading text='personal projects'/>
      <ul className="w-[280px] sm:w-[375px] md:w-[600px] mx-auto">
        {projects.map((project) => (
          <li key={project.name} className="flex flex-col items-center jutify-center">
            <Image src={project.banner} alt={project.name} width={1000} height={1000} priority={true} quality={100} className="w-[280px] sm:w-[375px] md:w-[600px] h-[100px] md:h-[250px] object-cover" />
            {project.name}
            {project.button.map((btn) => (
              <span key={btn.name} className="bg-white text-black px-3 py-1 rounded-full mx-2 cursor-pointer">
                {btn.url ? (
                  <a href={btn.url} target="_blank" rel="noopener noreferrer">
                    {btn.name}
                  </a>
                ) : (
                  btn.name
                )}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </Section>
  )
}
