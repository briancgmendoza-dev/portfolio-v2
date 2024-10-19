import Section from "@/app/_components/sections"
import Heading from '@/app/_components/ui/heading'
import DisplayEducation from "@/app/_components/recursive/display-education"

import { education } from "@/app/data"

export default function Education() {
  return (
    <Section>
      <Heading text='education'/>
      <DisplayEducation object={education} />
    </Section>
  )
}
