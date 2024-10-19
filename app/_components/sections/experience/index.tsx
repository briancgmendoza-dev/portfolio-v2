import Section from "@/app/_components/sections"
import Heading from '@/app/_components/ui/heading'
import DisplayExperience from "@/app/_components/sections/experience/display-experience"

import { experience } from "@/app/data"

export default function Experience() {
  return (
    <Section>
      <Heading text='experience' />
      <DisplayExperience experience={experience} />
    </Section>
  )
}
