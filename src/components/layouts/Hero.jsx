"use client"
import React from 'react';
import alifImg from "../../assets/alif.png"
import Image from 'next/image';
import TypewriterText from './TypewriterText';
import { MdFileDownload } from "react-icons/md";
import DownloadBtn from '../buttons/DownloadBtn';

const Hero = () => {
    return (
    <section id="about" className="max-w-6xl rounded-2xl  dark:bg-[#272730] mx-auto px-6 border border-primary py-10 md:py-15">
      <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  
  {/* Left Content */}
  <div className="space-y-8">
    <div className="inline-block ">
       <h1 className="text-6xl md:text-4xl font-bold text-balance leading-tight text-foreground">
      <TypewriterText></TypewriterText>
    </h1>
    </div>

  

    <p className="text-lg text-secondary max-w-3xl leading-relaxed">
      A passionate full-stack developer crafting beautiful, high-performance web applications.
      I specialize in modern web technologies and create solutions that seamlessly blend aesthetics
      with robust functionality.
    </p>
            <div className="pt-4 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-black rounded-lg font-medium hover:opacity-80 transition-opacity"
          >
            View My Work
          </a>
          {/* <a
            href="#"
            className="px-6 py-3 flex gap-1 items-center border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            <MdFileDownload />
           Download Resume
          </a> */}
          <DownloadBtn></DownloadBtn>
        </div>

     <div>
 

  </div>
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
      <div className="absolute -z-10 inset-0 bg-primary/20 blur-3xl rounded-full"></div>
    </div>
    
  </div>
 

</div>


        {/* <div className="pt-4 flex flex-wrap gap-4">
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
           Download Resume
          </a>
        </div> */}

      </div>
    </section>
  )
};

export default Hero;