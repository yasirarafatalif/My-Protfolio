import SkillsSlider from "@/components/AllSkills/SkillsSlider";
import Contact from "@/components/layouts/Contact";
import Hero from "@/components/layouts/Hero";
import Projects from "@/components/layouts/Projects";
import Resume from "@/components/layouts/Resume";

export default function Home() {
  return (
   <div>
    <div className="mt-10 pb-10">
      <Hero></Hero>
    </div>
    <div className="pb-10">
      <Projects></Projects>
    </div>
    <div>
      <SkillsSlider/>
    </div>
    <div>
      <Resume></Resume>
    </div>
    <div>
      <Contact></Contact>
    </div>
  
   </div>
  );
}
