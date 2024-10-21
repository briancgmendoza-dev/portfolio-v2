import Section from "@/app/_components/sections";
import Heading from "@/app/_components/ui/heading";
import SubHeading from "@/app/_components/ui/sub-heading";
import RenderPills from "@/app/_components/helper/render-pills";

import {
  frontend,
  backend,
  databases,
  cloud,
  dataAnalytics,
  testingLibrary,
  design,
  stateManagement
} from "@/app/data";

export default function Skills() {
  const combinedData = {
    frontend,
    backend,
    design,
    "state management": stateManagement["state-management"],
    databases,
    cloud,
    "data analytics": dataAnalytics["data-analytics"],
    "testing library": testingLibrary["testing-library"]
  };

  return (
    <Section>
      <ul className="py-10">
        <Heading text="Skills" />
        {Object.entries(combinedData).map(([category, values], index) => (
          <li key={category}>
            <SubHeading text={category} className="mt-3 mb-0" />
            <RenderPills values={values} colorIndex={index} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
