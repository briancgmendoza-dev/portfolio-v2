import SubHeading from "@/app/_components/ui/sub-heading";
import Pill from "@/app/_components/ui/pill";

import { TTechStackCategoryProps } from "@/app/_components/sections/experience/types";

export default function TechStackCategory ({ title, items, color }: TTechStackCategoryProps) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className="my-4">
      <SubHeading text={`${title}:`}/>
      {items.map((item) => (
        <Pill
          key={item}
          text={item}
          style={{
            backgroundColor: color,
            marginRight: '0.5rem',
          }}
        />
      ))}
    </div>
  );
};
