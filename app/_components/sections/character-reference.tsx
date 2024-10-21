import Section from "@/app/_components/sections"
import Heading from "@/app/_components/ui/heading"
import DisplayData from "@/app/_components/helper/display-data"

import { reference } from "@/app/data"

export default function CharacterReference() {
  return (
    <Section>
      <Heading text="character reference" />
      <DisplayData object={reference} />
    </Section>
  )
}
