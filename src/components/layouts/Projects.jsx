"use client"

import React, { useState } from 'react';
import nagorikImage from '../../assets/nagorik.png'
import importImage from '../../assets/import.png'
import appfindImage from '../../assets/appfind.png'
import Image from 'next/image';
import ViewButtons from '../buttons/ViewButtons';

const PROJECTS = [
  {
    id: 1,
    title: "NagorikSheba Platform",
    description: "A modern digital platform that allows citizens to report public infrastructure issues (like broken roads, streetlights, garbage overflow, water leakage, etc.) and enables government admins & staff to manage, track, and resolve those issues efficiently.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    year: 2025,
    image: nagorikImage
  },
  {
    id: 2,
    title: "Task Management App",
    description: "This project is a web application through which users can view various products, import them for personal use, and export (sell or supply) new products to the platform.",
    image: importImage,
    tags: ["React", "Firebase","Node.js", "MongoDB", "Tailwind CSS"],
    year: 2025,
  },
  {
    id: 3,
    title: "App Find Management",
    description: "At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.",
    image:appfindImage,
    tags: ["React", "JavaScript", "MongoDB"],
    year: 2023,
  },
]


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
          className={`group border  hover:cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
            hoveredId === project.id
              ? "border-[#009c8d] bg-card/60"
              : "bg-card/30 hover:border-primary/50"
          }`}
        >
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <Image
  src={project.image || '../../assets/image.png'}
  alt={project.title}
  fill
  className={`object-cover transition-transform duration-500 ${
    hoveredId === project.id ? "scale-110" : "scale-100"
  }`}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={hoveredId === project.id}
/>

            {/* <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                hoveredId === project.id ? "scale-110" : "scale-100"
              }`}
            /> */}
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

            <p className="text-sm  text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex  flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                    hoveredId === project.id
                      ? "text-black bg-[#009c8d]"
                      : "bg-primary/10 text-[#009c8d]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className='flex gap-3'>
              <ViewButtons></ViewButtons>
              <button className='btn btn-primary'>Live Demo</button>
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