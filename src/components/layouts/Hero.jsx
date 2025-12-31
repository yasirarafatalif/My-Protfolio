"use client"
import React from 'react';
import alifImg from "../../assets/alif.png"
import Image from 'next/image';

const Hero = () => {
    return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-28 md:py-40">
      <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  
  {/* Left Content */}
  <div className="space-y-8">
    <div className="inline-block">
      <p className="text-primary text-sm font-medium tracking-wide uppercase">
        Full Stack Developer
      </p>
    </div>

    <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight text-foreground">
      Hi, I'm Yasir Arafat Alif
    </h1>

    <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
      A passionate full-stack developer crafting beautiful, high-performance web applications.
      I specialize in modern web technologies and create solutions that seamlessly blend aesthetics
      with robust functionality.
    </p>
  </div>

  {/* Right Image */}
  <div className="flex justify-center lg:justify-end">
    <div className="relative">


<Image
  src={alifImg}
  alt="Yasir Arafat Alif"
  width={384}
  height={350}
  className="rounded-3xl shadow-2xl object-cover"
/>

    
{/*   
      <img
  src={alifImg}
  alt="Yasir Arafat Alif"
  className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
/> */}

      {/* Optional background blur / glow */}
      <div className="absolute -z-10 inset-0 bg-primary/20 blur-3xl rounded-full"></div>
    </div>
  </div>

</div>


        <div className="pt-4 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-80 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>
{/* 
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border mt-12">
          <div className="space-y-3 group cursor-default hover:bg-card/50 p-4 rounded-lg transition-colors">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Experience</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Full-stack development with React, Node.js, and TypeScript
            </p>
            <div className="text-primary text-sm font-medium">5+ Years</div>
          </div>
          <div className="space-y-3 group cursor-default hover:bg-card/50 p-4 rounded-lg transition-colors">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Focus</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Building scalable, high-performance applications with clean code
            </p>
            <div className="text-primary text-sm font-medium">100+ Projects</div>
          </div>
          <div className="space-y-3 group cursor-default hover:bg-card/50 p-4 rounded-lg transition-colors">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Approach</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              User-centric design, continuous learning, and innovation
            </p>
            <div className="text-primary text-sm font-medium">Always Growing</div>
          </div>
        </div> */}
      </div>
    </section>
  )
};

export default Hero;