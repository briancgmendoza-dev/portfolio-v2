import TechStackDisplay from "@/app/_components/sections/experience/tech-stack-display";
import ClientDisplay from "@/app/_components/sections/experience/client-display";

import { TExperience } from "@/app/_components/sections/experience/types";
import Image from "next/image";

const DisplayExperience = ({ experience }: { experience: TExperience[] }) => {
  return (
    <ul>
      {experience.map((item, index) => (
        <li key={index} className="mb-5">
          <div className="flex items-center justify-between md:justify-evenly">
            <Image src={item.logo} alt={item.company} className="border rounded-full mr-5 overflow-hidden" width={150} height={150} />
            <div className="flex flex-col">
              <span className="text-[33px] font-bold">{item.company}</span>
              <span>{item.date}</span>
              <span className="text-[16px] font-bold">{item.position}</span>
            </div>
          </div>

          {item.clients ? (
            <ClientDisplay clients={item.clients} />
          ) : (
            <TechStackDisplay techStack={{
              frontend: item.frontend,
              backend: item.backend,
            }} />
          )}

          {index < experience.length - 1 && <hr className="my-5" />}
        </li>
      ))}
    </ul>
  );
};

export default DisplayExperience;
