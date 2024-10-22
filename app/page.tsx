import Article from "@/app/_components/ui/article";
import Aside from "@/app/_components/ui/aside";
import Profile from "@/app/_components/sections/profile";
import Skills from "@/app/_components/sections/skills";
import Experience from "@/app/_components/sections/experience";
import Projects from "@/app/_components/sections/projects";
import Education from "@/app/_components/sections/education";
import CharacterReference from "@/app/_components/sections/character-reference";

export default function Home() {
  return (
    <main className="items-center justify-items-center lg:h-screen bg-black lg:overflow-hidden">
      <div className="lg:w-[100%] flex flex-col lg:flex-row sm:items-center lg:items-start justify-center">
        <Aside>
          <Profile />
        </Aside>
        <Article>
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <CharacterReference />
        </Article>
      </div>
    </main>
  );
}
