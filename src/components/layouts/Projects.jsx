"use client"

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product catalog, shopping cart, and payment integration.",
    image: "/e-commerce-dashboard.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    year: 2024,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    image: "/task-management-board.jpg",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    year: 2023,
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with interactive charts and real-time metrics.",
    image: "/analytics-dashboard.png",
    tags: ["React", "TypeScript", "D3.js", "PostgreSQL"],
    year: 2023,
  },
  {
    id: 4,
    title: "Social Network",
    description: "Social platform with user profiles, messaging, and content sharing capabilities.",
    image: "/social-network-profile.jpg",
    tags: ["Next.js", "Supabase", "WebSocket"],
    year: 2024,
  },
]

import React, { useState } from 'react';

const Projects = () => {
//    const [hoveredId, setHoveredId] = useState<number | null>(null)
   const [hoveredId, setHoveredId] = useState(null)

  return (
   <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
  <div className="space-y-14">
    
    {/* Section Header */}
    <div className="space-y-4">
      <h2 className="text-5xl font-bold text-foreground">Featured Projects</h2>
      <p className="text-lg text-muted-foreground max-w-2xl">
        A selection of recent work showcasing my skills in full-stack development and design.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project) => (
        <div
          key={project.id}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          className={`group border border-border hover:cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
            hoveredId === project.id
              ? "border-primary bg-card/60"
              : "bg-card/30 hover:border-primary/50"
          }`}
        >
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                hoveredId === project.id ? "scale-110" : "scale-100"
              }`}
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3
                className={`font-bold transition-colors ${
                  hoveredId === project.id
                    ? "text-[#009c8d] text-xl"
                    : "text-foreground text-lg"
                }`}
              >
                {project.title}
              </h3>
              <span className="text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                    hoveredId === project.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

  )
}

export default Projects;