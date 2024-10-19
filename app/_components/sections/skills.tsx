import Section from "@/app/_components/sections"
import Heading from "@/app/_components/ui/heading"
import SubHeading from "@/app/_components/ui/sub-heading"
import Pill from "@/app/_components/ui/pill"
import {
  frontend,
  backend,
  databases,
  cloud,
  dataAnalytics,
  testingLibrary,
  design,
  stateManagement
} from "@/app/data"
import { COLORS } from '@/app/constants'

export default function Skills() {
  const exportedStateManagement = stateManagement['state-management']
  const exportedDataAnalytics = dataAnalytics['data-analytics']
  const exportedTestingLibrary = testingLibrary['testing-library']

  const combinedData = {
    frontend,
    backend,
    design,
    "state management": exportedStateManagement,
    databases,
    cloud,
    "Data Analytics": exportedDataAnalytics,
    "Testing Library": exportedTestingLibrary
  }

  const colorKeys = Object.keys(COLORS) as Array<keyof typeof COLORS>;

  return (
    <Section>
      <ul>
        <Heading text="skills" />
        {Object.entries(combinedData).map(([category, values], index) => (
          <li key={category} className='mb-2'>
            <SubHeading text={category} />
            {values.map((value) => {
              const colorKey = colorKeys[index % colorKeys.length];
              const isYellow = colorKey === 'yellow';
              const isOrange = colorKey === 'orange';

              return (
                <Pill
                  key={value}
                  style={{ backgroundColor: COLORS[colorKey] }}
                  className={isYellow || isOrange ? 'text-black' : 'text-white'}
                  text={value}
                />
              );
            })}
          </li>
        ))}
      </ul>
    </Section>
  )
}
