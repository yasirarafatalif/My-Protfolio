"use client"
import React from 'react';

const Navbar = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer hover:opacity-75 transition-opacity"
        >
          Yasir Arafat Alif
        </button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("resume")}
            className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
          >
            Resume
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;