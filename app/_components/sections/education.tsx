import Section from "@/app/_components/sections"
import Heading from '@/app/_components/ui/heading'
import DisplayData from "@/app/_components/helper/display-data"

import { education } from "@/app/data"

export default function Education() {
  return (
    <Section>
      <Heading text='education'/>
      <DisplayData object={education} />
    </Section>
  )
}
