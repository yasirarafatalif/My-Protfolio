"use client"
import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

const Footer = () => {
   return (
    <footer className="border-t border-[#009c8d]  bg-card/50 mt-28">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-foreground">Yasir Arafat Alif</h3>
            <p className="text-sm text-muted-foreground">Front-End-Developer crafting modern web experiences</p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("resume")}
                className="text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
    Connect
  </h4>

  <div className="flex flex-col gap-3 text-sm">
    <a
      href="https://github.com/yasirarafatalif"
      className="flex items-center gap-2 w-fit
      text-muted-foreground hover:text-primary transition-colors"
    >
      <FaGithub className="text-base" />
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/yasir-arafat-alif-b73944275/"
      className="flex items-center gap-2 w-fit
      text-muted-foreground hover:text-primary transition-colors"
    >
      <FaLinkedin className="text-base" />
      LinkedIn
    </a>

    <a
      href="#"
      className="flex items-center gap-2 w-fit
      text-muted-foreground hover:text-primary transition-colors"
    >
      <FaFacebook className="text-base" />
      Facebook
    </a>
  </div>
</div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#009c8d] pt-8">
          <p className="text-xs text-muted-foreground text-center">© 2025 Yasir Arafat Alif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;