import SkillsSlider from "@/components/AllSkills/SkillsSlider";
import Contact from "@/components/layouts/Contact";
import Hero from "@/components/layouts/Hero";
import Projects from "@/components/layouts/Projects";
import Resume from "@/components/layouts/Resume";


export default function Home() {
  return (
   <div>
    <div>
      <Hero></Hero>
    </div>
    <div>
      <Projects></Projects>
    </div>
    <div>
      <SkillsSlider></SkillsSlider>
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
