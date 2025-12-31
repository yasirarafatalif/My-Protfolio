"use client"

// import SkillsSlider from "./skills-slider"

export default function Resume() {
  return (
    <section id="resume" className="max-w-6xl mx-auto px-6 py-28">
      <div className="space-y-14">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold text-foreground">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">My professional journey and academic background.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-foreground uppercase tracking-wide text-sm">Experience</h3>
            <div className="space-y-8">
              {/* <div className="border-l-2 border-[#009c8d] pl-4 space-y-2 hover:border-[#009c8d]/80 transition-colors">
                <h4 className="font-semibold text-foreground">Senior Software Developer</h4>
                <p className="text-xs text-[#009c8d] font-medium">TechCorp Inc. • 2022 - Present</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Led development of multiple full-stack applications. Mentored junior developers and established best
                  practices.
                </p>
              </div>
              <div className="border-l-2 border-[#009c8d] pl-4 space-y-2 hover:border-[#009c8d]/80 transition-colors">
                <h4 className="font-semibold text-foreground">Full Stack Developer</h4>
                <p className="text-xs text-[#009c8d] font-medium">StartupXYZ • 2020 - 2022</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built and maintained scalable web applications. Implemented responsive designs and optimized
                  performance.
                </p>
              </div> */}
              <div className="border-l-2 border-[#009c8d] pl-4 space-y-2 hover:border-[#009c8d]/80 transition-colors">
                <h4 className="font-semibold text-foreground">Junior Developer</h4>
                <p className="text-xs text-[#009c8d] font-medium">WebStudio • 2019 - 2020</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Developed web applications using React and Node.js. Collaborated with design and product teams.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-foreground uppercase tracking-wide text-sm">Education</h3>
            <div className="space-y-8">
              <div className="border-l-2 border-[#009c8d] pl-4 space-y-2 hover:border-[#009c8d]/80 transition-colors">
                <h4 className="font-semibold text-foreground">Diploma In Computer Science</h4>
                <p className="text-xs text-[#009c8d] font-medium">Dhaka Polytechnic Insititute</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Graduated with honors. Focused on web development and software engineering.
                </p>
              </div>
              <div className="border-l-2 border-[#009c8d] pl-4 space-y-2 hover:border-[#009c8d]/80 transition-colors">
                <h4 className="font-semibold text-foreground">Web Development Bootcamp</h4>
                <p className="text-xs text-[#009c8d] font-medium">Programmig Hero -2025</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Intensive bootcamp covering full-stack development. Built several production projects.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="flex gap-4 pt-6 border-t border-border">
          <button className="px-6 py-3 bg-[#009c8d] text-[#009c8d]-foreground rounded-lg font-medium hover:opacity-80 transition-opacity">
            Download Resume
          </button>
          <button className="px-6 py-3 border border-[#009c8d] text-[#009c8d] rounded-lg font-medium hover:bg-[#009c8d]/10 transition-colors">
            View Full CV
          </button>
        </div> */}
      </div>
    </section>
  )
}
