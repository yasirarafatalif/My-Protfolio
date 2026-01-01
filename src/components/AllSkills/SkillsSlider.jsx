
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si"

export default function SkillsGrid() {
const skills = [
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#272730" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express", color: "#272730" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
]


  return (
    <section className="max-w-6xl mx-auto rounded-2xl border  border-secondary dark:bg-[#272730] px-6 py-10">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl text-primary font-bold mt-2">My Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* Left: Icons */}
<div>
  {/* TOP ROW – Left to Right */}
<marquee behavior="scroll" direction="left" >
  <div className="flex items-center gap-6 py-9">
    {[...skills, ...skills].map((skill, i) => {
      const Icon = skill.icon
      const Color = skill.color

      return (
        <div
          key={i}
          className="relative group flex-shrink-0"
        >
          {/* Tooltip */}
          <div
            className="
              absolute -top-8 left-1/2 -translate-x-1/2
              px-2 py-1 rounded-md text-xs font-medium
              bg-black text-white
              opacity-0 scale-95
              group-hover:opacity-100 group-hover:scale-100
              transition-all duration-300
              pointer-events-none
              whitespace-nowrap
            "
          >
            {skill.name}
          </div>

          {/* Card */}
          <div
            className="
              flex items-center justify-center
              h-24 w-24 rounded-xl
              bg-white/95
              border border-gray-200
              transition-all duration-300
              group-hover:-translate-y-1
              group-hover:shadow-xl
            "
            style={{
              backgroundColor: `color-mix(in srgb, ${Color} 18%, white)`,
            }}
          >
            <Icon
              className="text-4xl transition-transform duration-300 group-hover:scale-110"
              style={{ color: Color }}
            />
          </div>
        </div>
      )
    })}
  </div>
</marquee>


{/* BOTTOM ROW – Right to Left */}
<marquee behavior="scroll" direction="right" >
  <div className="flex items-center gap-6 py-9">
    {[...skills, ...skills].map((skill, i) => {
      const Icon = skill.icon
      const Color = skill.color

      return (
        <div
          key={i}
          className="relative group flex-shrink-0"
        >
          {/* Tooltip */}
          <div
            className="
              absolute -top-8 left-1/2 -translate-x-1/2
              px-2 py-1 rounded-md text-xs font-medium
              bg-black text-white
              opacity-0 scale-95
              group-hover:opacity-100 group-hover:scale-100
              transition-all duration-300
              pointer-events-none
              whitespace-nowrap
            "
          >
            {skill.name}
          </div>

          {/* Card */}
          <div
            className="
              flex items-center justify-center
              h-24 w-24 rounded-xl
              bg-white/95
              border border-gray-200
              transition-all duration-300
              group-hover:-translate-y-1
              group-hover:shadow-xl
            "
            style={{
              backgroundColor: `color-mix(in srgb, ${Color} 18%, white)`,
            }}
          >
            <Icon
              className="text-4xl transition-transform duration-300 group-hover:scale-110"
              style={{ color: Color }}
            />
          </div>
        </div>
      )
    })}
  </div>
</marquee>

</div>



        {/* Right: Text */}
        <div className="space-y-4 border-l-2 border-[#009c8d] pl-4  hover:border-[#009c8d]/80 transition-colors  dark:text-gray-300">
  <p className="text-secondary">
    <span className="font-semibold text-accent  dark:text-white">Front-End:</span>{" "}
    HTML, CSS, JavaScript, React, Next
  </p>

  <p className="text-secondary">
    <span className="font-semibold text-accent dark:text-white">Back-End:</span>{" "}
    Node.js, Express
  </p>

  <p className="text-secondary">
    <span className="font-semibold text-accent dark:text-white">Databases:</span>{" "}
    MongoDB
  </p>

  <p className="text-secondary">
    <span className="font-semibold  text-accent dark:text-white">
      Tools & Platforms:
    </span>{" "}
    Git, VS Code, Vite, Figma, Vercel
  </p>
</div>

      </div>
    </section>
  )
}
