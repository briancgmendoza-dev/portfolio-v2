import Heading from "@/app/_components/ui/heading"
import SubHeading from "@/app/_components/ui/sub-heading"
import Pill from "@/app/_components/ui/pill"
import {
  languages,
  frontend,
  backend,
  databases,
  practices,
  cloud,
  tools,
  dataAnalytics,
  testingLibrary,
  designLibrary,
  stateManagement
} from "@/app/data"
import { COLORS } from '@/app/constants'

export default function Skills() {
  const exportedDesignLibrary = designLibrary['design-library']
  const exportedStateManagement = stateManagement['state-management']
  const exportedDataAnalytics = dataAnalytics['data-analytics']
  const exportedTestingLibrary = testingLibrary['testing-library']

  const combinedData = {
    languages,
    frontend,
    backend,
    "design library": exportedDesignLibrary,
    "state management": exportedStateManagement,
    databases,
    practices,
    cloud,
    tools,
    "Data Analytics": exportedDataAnalytics,
    "Testing Library": exportedTestingLibrary
  }

  const colorKeys = Object.keys(COLORS) as Array<keyof typeof COLORS>;

  return (
    <section className='text-white'>
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
    </section>
  )
}
