import Article from "@/app/_components/ui/article";
import Aside from "@/app/_components/ui/aside";
import Profile from "@/app/_components/sections/profile";
import Skills from "@/app/_components/sections/skills";
import Experience from "@/app/_components/sections/experience";
import Projects from "@/app/_components/sections/projects";
import Education from "@/app/_components/sections/education";

export default function Home() {
  return (
    <main className="items-center justify-items-center min-h-screen bg-black">
      <Aside>
        <Profile />
      </Aside>
      <Article>
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </Article>
    </main>
  );
}
