import Image from "next/image"
import Section from "@/app/_components/sections"
import Heading from '@/app/_components/ui/heading'
import RenderPills from "@/app/_components/helper/render-pills"

import { projects } from "@/app/data"

interface Button {
  name: string;
  url: string;
}

interface Project {
  name: string;
  banner: string;
  button: Button[];
  frontend?: string[];
  backend?: string[];
  other?: string[];
}

export default function Projects() {
  return (
    <Section>
      <Heading text='personal projects'/>
      <ul className="w-[100%] sm:w-[425px] md:w-[600px] mx-auto">
        {projects.map((project) => (
          <li key={project.name} className="flex flex-col items-center jutify-center border my-5">
            <Image
              className="w-[280px] sm:w-[375px] md:w-[600px] h-[100px] md:h-[250px] object-contain mb-6"
              src={project.banner}
              alt={project.name}
              width={1000}
              height={1000}
              priority={true}
              quality={100}
            />
            <div className="w-[80%] md:w-[50%] flex flex-row items-center justify-between my-2">
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
            </div>
            <div className="w-[80%]">
              <div className="mb-4">
                {['frontend', 'backend', 'other'].map((type) => {
                  const skills = project[type as keyof Project]
                  if (Array.isArray(skills) && skills.every(skill => typeof skill === 'string')) {
                    return (
                      <div key={type} className="flex flex-col items-center justify-center capitalize">
                        <div className="font-semibold my-3 self-start">{type}</div>
                        <RenderPills
                          values={skills}
                          colorIndex={['frontend', 'backend', 'other'].indexOf(type) + 5}
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
