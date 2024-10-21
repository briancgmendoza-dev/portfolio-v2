import Image from "next/image";

import { TExperience } from "@/app/_components/sections/experience/types";

export default function ExperienceDetails ({ item }: Readonly<{ item: TExperience }>) {
  return (
    <div className="flex items-center justify-between md:justify-evenly">
      <Image
        src={item.logo}
        alt={item.company}
        className="border rounded-full mr-5 overflow-hidden"
        width={150}
        height={150}
        priority={true}
      />
      <div className="flex flex-col">
        <span className="text-[33px] font-bold">{item.company}</span>
        <span>{item.date}</span>
        <span className="text-[16px] font-bold">{item.position}</span>
        <span>Website: {item.site ? (
          <a href={item.site} target="_blank" className="text-blue-500">
            {item.site}
          </a>
          ) : (
            "N/A"
          )}
        </span>
      </div>
    </div>
  );
};
