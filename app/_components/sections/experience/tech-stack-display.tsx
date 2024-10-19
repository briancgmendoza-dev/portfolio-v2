import TechStackCategory from "@/app/_components/sections/experience/tech-stack-category";
import { COLORS } from "@/app/constants";

import { TTechStack } from "@/app/_components/sections/experience/types";

const TechStackDisplay = ({ techStack }: { techStack: TTechStack }) => (
  <>
    <TechStackCategory title="Frontend" items={techStack.frontend} color={COLORS.indigo} />
    <TechStackCategory title="Backend" items={techStack.backend} color={COLORS.violet} />
    <TechStackCategory title="Game" items={techStack.game} color={COLORS.green} />
  </>
);

export default TechStackDisplay;
