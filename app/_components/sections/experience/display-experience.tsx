import ExperienceDetails from "@/app/_components/sections/experience/experience-details";
import ClientDisplay from "@/app/_components/sections/experience/client-display";

import { TExperience } from "@/app/_components/sections/experience/types";

const DisplayExperience = ({ experience }: Readonly<{ experience: TExperience[] }>) => {
  return (
    <ul>
      {experience.map((item, index) => (
        <li key={index} className="mb-5">
          <ExperienceDetails item={item} />
          <ClientDisplay clients={item.clients} />
          {index < experience.length - 1 && <hr className="my-5" />}
        </li>
      ))}
    </ul>
  );
};

export default DisplayExperience;
